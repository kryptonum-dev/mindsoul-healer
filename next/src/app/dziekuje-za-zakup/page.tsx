import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/seo/query-metadata';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';
import Footer from '@/components/global/Footer';
import Analytics from './Analytics';
import { ThankYouPageTypes } from './page.types';

export default async function ThankYou({
  searchParams: { ec_product, ec_product_uuid, ec_amount, ttclid },
}: ThankYouPageTypes) {
  const { content } = await query();

  return (
    <>
      <main>
        <Analytics {...{ ec_product, ec_product_uuid, ec_amount, ttclid }} />
        <Components data={content} />
      </main>
      <Footer />
    </>
  );
}

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

export async function generateMetadata() {
  return await QueryMetadata({ name: 'ThankYou_Page', path: '' });
}
