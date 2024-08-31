import { ImgDataQuery } from '@/components/ui/image';
import PurchaseCtaSection from './PurchaseCtaSection';

export default PurchaseCtaSection;
export type { PurchaseCtaSectionTypes } from './PurchaseCtaSection.types';

export const PurchaseCtaSection_Query = /* groq */ `
    _type == "PurchaseCtaSection" => {
        image{
            ${ImgDataQuery}
        },
        sectionHeading,
        paragraph,
        cta,
    },
`;
