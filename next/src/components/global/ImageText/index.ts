import { ImgDataQuery } from '@/components/ui/image';
import ImageText from './ImageText';

export default ImageText;
export type { ImageTextTypes } from './ImageText.types';

export const ImageText_Query = /* groq */ `
    _type == "ImageText" => {
        sectionHeading,
        paragraph,
        image {
        ${ImgDataQuery}
        },
        cta,
    },
`;
