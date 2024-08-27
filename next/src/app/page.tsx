import sanityFetch from '@/utils/sanity.fetch';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';

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
      <Components data={content} />
    </>
  );
}
