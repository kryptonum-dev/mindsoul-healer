import HeroHeaderVideo, { HeroHeaderVideoTypes, HeroHeaderVideo_Query } from './global/HeroHeaderVideo';
import ListWithImage, { ListWithImageTypes, ListWithImage_Query } from './global/ListWithImage';
import ModuleList, { ModuleListTypes, ModuleList_Query } from './global/ModuleList';
import SimpleGridList, { SimpleGridListTypes, SimpleGridList_Query } from './global/SimpleGridList';
import SimpleStaggeredGrid, { SimpleStaggeredGridTypes, SimpleStaggeredGrid_Query } from './global/SimpleStaggeredGrid';

type componentsMapTypes = {
  HeroHeaderVideo: HeroHeaderVideoTypes;
  SimpleStaggeredGrid: SimpleStaggeredGridTypes;
  SimpleGridList: SimpleGridListTypes;
  ListWithImage: ListWithImageTypes;
  ModuleList: ModuleListTypes;
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
    },
  `;
