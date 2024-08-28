import { ImgDataQuery } from '@/components/ui/image';
import SimpleGridList from './SimpleGridList';

export default SimpleGridList;
export type { SimpleGridListTypes } from './SimpleGridList.types';

export const SimpleGridList_Query = /* groq */ `
    _type == "SimpleGridList" => {
        sectionHeading,
        image {
            ${ImgDataQuery}
        },
        list,
        preCtaText,
        cta,
    }
`;
