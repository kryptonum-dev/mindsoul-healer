import sanityFetch from './sanity.fetch';

type getLegalLinksTypes = {
  privacyPolicy: string;
  termsAndConditions: string;
};

export default async function getLegalLinks(): Promise<getLegalLinksTypes> {
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
