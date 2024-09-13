import sanityFetch from './sanity.fetch';

export type PlatformType = 'instagram' | 'youtube' | 'tiktok' | 'facebook' | 'linkedin';

export async function getSocials(list: ('youtube' | 'instagram' | 'tiktok' | 'facebook' | 'linkedin')[]) {
  const res: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
  } = await sanityFetch({
    query: /* groq */ `
       *[_id == 'global'][0].socials
        
      `,
    tags: ['global'],
  });

  return Object.entries(res)
    .map(([key, value]) => ({ name: key as PlatformType, href: value }))
    .filter(({ name }, _) => list.includes(name))
    .sort((a, b) => {
      return list.indexOf(a.name) - list.indexOf(b.name);
    });
}
