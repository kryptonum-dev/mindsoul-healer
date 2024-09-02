import { ImgDataQuery } from '@/components/ui/image';
import FaqSection from './FaqSection';

export default FaqSection;
export type { FaqSectionTypes } from './FaqSection.types';

export const FaqSection_Query = /* groq */ `
    _type == "FaqSection" => {
        sectionHeading,
        list[] -> {
            image {
                ${ImgDataQuery}
            },
            question,
            answer,
            cta,
        },
    },

`;
