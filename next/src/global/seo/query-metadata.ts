import type { Metadata } from 'next';
import sanityFetch from '@/utils/sanity.fetch';
import Seo from '@/global/seo';
import type { QueryMetadataTypes, QueryTypes } from './Seo.types';

/**
 * Performs an SEO query.
 * @param {string} name - The name of the SEO query for GROQ. It will be `*[_id == "${name}"][0]` or `*[_type=='${name}' && slug.current == $slug][0]` if the `dynamicSlug` is provided.
 * @param {string} path - The canonical path for the URL.
 * @param {string} [dynamicSlug] - Optional. Used to query dynamic pages, like blog posts.
 * @param {string} [titleSuffix] - Optional suffix to append to the SEO title.
 * @returns {Promise<Metadata>} Returns a promise of the SEO object.
 */
export const QueryMetadata = async ({ name, path }: QueryMetadataTypes): Promise<Metadata> => {
  const customQuery = `*[_id == "${name}"][0]`;

  const { title, description, openGraphImage } = await query(customQuery, name);

  return Seo({
    title,
    description,
    path,
    ...(openGraphImage?.url && { openGraphImage }),
  });
};

const query = async (customQuery: string, tag: string): Promise<QueryTypes> => {
  const seo = await sanityFetch<QueryTypes>({
    query: /* groq */ `
      ${customQuery} {
        "title": seo.title,
        "description": seo.description,
        "openGraphImage": {
          "url": seo.img.asset -> url + "?w=1200",
          "height": round(1200 / seo.img.asset -> metadata.dimensions.aspectRatio),
        },
      }
    `,
    tags: [tag],
  });
  return { ...seo };
};
