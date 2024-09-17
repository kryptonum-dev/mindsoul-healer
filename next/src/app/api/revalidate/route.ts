import { parseBody } from 'next-sanity/webhook';
import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import sanityFetch from '@/utils/sanity.fetch';

type QueryType = {
  references: string[];
};

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      tag: string;
      id?: string;
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    const { tag, id } = body!;

    if (!isValidSignature) {
      return new Response('Invalid Signature', { status: 401 });
    }

    if (!tag) {
      return new Response('Bad Request', { status: 400 });
    }

    revalidateTag(tag);

    const data = await query(tag, id);
    const references = data?.references;
    references?.forEach(tag => revalidateTag(tag));
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: unknown) {
    console.error(error);
    return new Response((error as { message: string }).message, { status: 500 });
  }
}

const query = async (tag: string, id?: string): Promise<QueryType> => {
  let queryHeader = `*[_type == "${tag}"][0]`;
  if (id) queryHeader = `*[_type == "${tag}" && _id == "${id}"][0]`;
  return await sanityFetch<QueryType>({
    query: /* groq */ `
      ${queryHeader}{
        "references": *[references(^._id)]._type,
      }
    `,
  });
};
