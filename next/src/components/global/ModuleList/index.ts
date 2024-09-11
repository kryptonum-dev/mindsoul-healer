import { ImgDataQuery } from '@/components/ui/image';
import ModuleList from './ModuleList';

export default ModuleList;
export type { ModuleListTypes } from './ModuleList.types';

export const ModuleList_Query = /* groq */ `
    _type == "ModuleList" => {
        sectionHeading,
        paragraph,
        image {
            ${ImgDataQuery}
        },
        "video": video.asset -> url,
        list[] -> {
            moduleName,
            moduleDuration,
            lessonList[],
        },
        form {
            formHeading,
            videoThumbnail {
                ${ImgDataQuery}
            },
            videoID,
            buttonText,
        },
        cta,
    },
`;
