import { ImgDataQuery } from '@/components/ui/image';
import SimpleStaggeredGrid from './SimpleStaggeredGrid';

export default SimpleStaggeredGrid;
export type { SimpleStaggeredGridTypes } from './SimpleStaggeredGrid.types';

export const SimpleStaggeredGrid_Query = /* groq */ `
_type == "SimpleStaggeredGrid" => {
    sectionHeading,
    imagesGrid[]{
    
        topParagraph,
        imageContainer{
            image {
                ${ImgDataQuery}
            },
            imageText,
        },
        bottomParagraph,
    },
    content,
},
`;
