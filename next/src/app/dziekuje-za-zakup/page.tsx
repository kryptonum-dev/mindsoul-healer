import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/seo/query-metadata';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';
import Footer from '@/components/global/Footer';

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: /* groq */ `
      *[_type == "ThankYou_Page"][0] {
        ${Components_Query}
      }
    `,
    tags: ['ThankYou_Page'],
  });
};

export default async function ThankYou() {
  const { content } = await query();

  return (
    <>
      <main>
        <Components data={content} />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata() {
  return await QueryMetadata({ name: 'ThankYou_Page', path: '' });
}
