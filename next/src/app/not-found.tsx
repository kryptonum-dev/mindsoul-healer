import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/seo/query-metadata';
import NotFound, { NotFoundTypes, NotFound_Query } from '@/components/global/NotFound';
import { ImgDataQuery } from '@/components/ui/image';

export default async function NotFoundPage() {
  const data = await query();

  return (
    <main>
      <NotFound {...data} />
    </main>
  );
}

const query = async (): Promise<NotFoundTypes> => {
  return await sanityFetch({
    query: NotFound_Query,
    tags: ['NotFound_Page'],
  });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'NotFound_Page',
    path: '/404',
  });
}
