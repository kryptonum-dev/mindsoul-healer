import NotFound from './NotFound';

export default NotFound;
export type { NotFoundTypes } from './NotFound.types';

export const NotFound_Query = /* groq */ `
    *[_type == "NotFound_Page"][0] {
        sectionHeading,
        paragraph,
        cta,
    }
`;
