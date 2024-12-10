import { ImgDataQuery } from '@/components/ui/image';
import HeroHeaderVideo from './HeroHeaderVideo';

export default HeroHeaderVideo;
export type { HeroHeaderVideoTypes } from './HeroHeaderVideo.types';

export const HeroHeaderVideo_Query = /* groq */ `
    _type == "HeroHeaderVideo" => {
        sectionHeading,
        paragraph,
        image {
        ${ImgDataQuery}
        },
        videoId,
        authorName,
        cta,
    },
`;
