import { ImgDataQuery } from '@/components/ui/image';
import ListWithImage from './ListWithImage';

export default ListWithImage;
export type { ListWithImageTypes } from './ListWithImage.types';

export const ListWithImage_Query = /* groq */ `
    _type == "ListWithImage" => {
        list[]{
            image{
                ${ImgDataQuery}
            },
            sectionHeading,
            content,      
        },
    },
`;
