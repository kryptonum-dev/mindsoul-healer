import VideoEmbedHeading from './VideoEmbedHeading';

export default VideoEmbedHeading;
export type { VideoEmbedHeadingTypes } from './VideoEmbedHeading.types';

export const VideoEmbedHeading_Query = /* groq */ `
    _type == "VideoEmbedHeading" => {
        sectionHeading,
        paragraph,
        videoID,
    },
`;
