import { ImgDataQuery } from '@/components/ui/image';
import AboutAuthor from './AboutAuthor';

export default AboutAuthor;
export type { AboutAuthorTypes } from './AboutAuthor.types';

export const AboutAuthor_Query = /* groq */ `
    _type == "AboutAuthor" => {
        sectionHeading,
        paragraphMain,
        paragraphSecondary,
        image {
            ${ImgDataQuery}
        },
        list[]{
            name,
            href,
        },
    },

`;
