import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/seo/query-metadata';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: /* groq */ `
      *[_type == "Lesson_Page"][0] {
        ${Components_Query}
      }
    `,
    tags: ['Lesson_Page'],
  });
};

export default async function Lesson({ searchParams }: { searchParams: { token: string } }) {
  if (!searchParams.token) notFound();

  const isValidToken = await verifyTokenWithMailerLite(searchParams.token);

  if (!isValidToken) notFound();

  const { content } = await query();

  return (
    <>
      <Components data={content} />
    </>
  );
}

export async function generateMetadata() {
  return await QueryMetadata({ name: 'Lesson_Page', path: '' });
}

const verifyTokenWithMailerLite = async (token: string): Promise<boolean> => {
  try {
    const res = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      headers: {
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY!,
        'Content-Type': 'application/json',
      },
    });

    const response = await res.json();

    const subscriber = response.find(
      (sub: { fields: [{ key: string; value: string }] }) =>
        sub.fields.find(field => field.key === 'user_token')?.value === token
    );

    return !!subscriber;
  } catch (error) {
    console.error('Wystąpił problem z weryfikacją tokenu', error);
    return false;
  }
};
