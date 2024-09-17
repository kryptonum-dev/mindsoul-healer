import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/seo/query-metadata';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';
import Footer from '@/components/global/Footer';

export async function generateMetadata() {
  return await QueryMetadata({ name: 'Index_Page', path: '' });
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: /* groq */ `
      *[_type == "Index_Page"][0] {
        ${Components_Query}
      }
    `,
    tags: ['Index_Page'],
  });
};

export default async function Home() {
  const { content } = await query();
  return (
    <>
      <main id='main'>{<Components data={content} />}</main>
      {/* <Footer /> */}
    </>
  );
}
