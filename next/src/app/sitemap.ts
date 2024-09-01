import { MetadataRoute } from 'next';
import { DOMAIN } from '@/global/constants';

const staticRoutes = ['/'];
const staticPages: MetadataRoute.Sitemap = staticRoutes.map(route => ({ url: `${DOMAIN}${route}` }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [...staticPages];
}
