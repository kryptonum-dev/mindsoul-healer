import AboutAuthor, { AboutAuthorTypes, AboutAuthor_Query } from './global/AboutAuthor';
import FaqSection, { FaqSectionTypes, FaqSection_Query } from './global/FaqSection';
import HeadingWithColumns, { HeadingWithColumnsTypes, HeadingWithColumns_Query } from './global/HeadingWithColumns';
import HeroHeaderVideo, { HeroHeaderVideoTypes, HeroHeaderVideo_Query } from './global/HeroHeaderVideo';
import ImageText, { ImageTextTypes, ImageText_Query } from './global/ImageText';
import ListWithImage, { ListWithImageTypes, ListWithImage_Query } from './global/ListWithImage';
import ModuleList, { ModuleListTypes, ModuleList_Query } from './global/ModuleList';
import PurchaseCtaSection, { PurchaseCtaSectionTypes, PurchaseCtaSection_Query } from './global/PurchaseCtaSection';
import QuestionSection, { QuestionSectionTypes, QuestionSection_Query } from './global/QuestionSection';
import SimpleGridList, { SimpleGridListTypes, SimpleGridList_Query } from './global/SimpleGridList';
import SimpleStaggeredGrid, { SimpleStaggeredGridTypes, SimpleStaggeredGrid_Query } from './global/SimpleStaggeredGrid';
import TwoBoxesCta, { TwoBoxesCtaTypes, TwoBoxesCta_Query } from './global/TwoBoxesCta';
import VideoEmbedHeading, { VideoEmbedHeadingTypes, VideoEmbedHeading_Query } from './global/VideoEmbedHeading';

type componentsMapTypes = {
  HeroHeaderVideo: HeroHeaderVideoTypes;
  SimpleStaggeredGrid: SimpleStaggeredGridTypes;
  SimpleGridList: SimpleGridListTypes;
  ListWithImage: ListWithImageTypes;
  ModuleList: ModuleListTypes;
  PurchaseCtaSection: PurchaseCtaSectionTypes;
  AboutAuthor: AboutAuthorTypes;
  HeadingWithColumns: HeadingWithColumnsTypes;
  TwoBoxesCta: TwoBoxesCtaTypes;
  FaqSection: FaqSectionTypes;
  QuestionSectionTypes: QuestionSectionTypes;
  VideoEmbedHeading: VideoEmbedHeadingTypes;
  ImageText: ImageTextTypes;
};

export type ComponentTypes = componentsMapTypes[keyof componentsMapTypes] & { _type: string; index: number };

export default function Components({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    item = { ...item, index };
    const componentType = item._type as keyof componentsMapTypes;
    const componentsMapTypes: Record<string, React.ReactNode> = {
      HeroHeaderVideo: <HeroHeaderVideo {...(item as HeroHeaderVideoTypes)} />,
      SimpleStaggeredGrid: <SimpleStaggeredGrid {...(item as SimpleStaggeredGridTypes)} />,
      SimpleGridList: <SimpleGridList {...(item as SimpleGridListTypes)} />,
      ListWithImage: <ListWithImage {...(item as ListWithImageTypes)} />,
      ModuleList: <ModuleList {...(item as ModuleListTypes)} />,
      PurchaseCtaSection: <PurchaseCtaSection {...(item as PurchaseCtaSectionTypes)} />,
      AboutAuthor: <AboutAuthor {...(item as AboutAuthorTypes)} />,
      HeadingWithColumns: <HeadingWithColumns {...(item as HeadingWithColumnsTypes)} />,
      TwoBoxesCta: <TwoBoxesCta {...(item as TwoBoxesCtaTypes)} />,
      FaqSection: <FaqSection {...(item as FaqSectionTypes)} />,
      QuestionSection: <QuestionSection {...(item as QuestionSectionTypes)} />,
      VideoEmbedHeading: <VideoEmbedHeading {...(item as VideoEmbedHeadingTypes)} />,
      ImageText: <ImageText {...(item as ImageTextTypes)} />,
    };
    const DynamicComponent = componentsMapTypes[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
}

export const Components_Query = /* groq */ `
    content[] {
      _type,
      ${HeroHeaderVideo_Query}
      ${SimpleStaggeredGrid_Query}
      ${SimpleGridList_Query}
      ${ListWithImage_Query}
      ${ModuleList_Query}
      ${PurchaseCtaSection_Query}
      ${AboutAuthor_Query}
      ${HeadingWithColumns_Query}
      ${TwoBoxesCta_Query}
      ${FaqSection_Query}
      ${QuestionSection_Query}
      ${VideoEmbedHeading_Query}
      ${ImageText_Query}
    },
  `;
