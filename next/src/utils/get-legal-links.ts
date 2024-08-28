import sanityFetch from './sanity.fetch';

type getLegalLinkSTypes = {
  privacyPolicy: string;
  termsAndConditions: string;
};

export default async function getLegalLinkS(): Promise<getLegalLinkSTypes> {
  return await query();
}

async function query(): Promise<getLegalLinkSTypes> {
  return await sanityFetch({
    query: /* groq */ `
      *[_id == 'global'][0] {
        privacyPolicy,
        termsAndConditions,
      }
    `,
    tags: ['global'],
  });
}
