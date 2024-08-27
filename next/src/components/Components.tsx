import HeroHeaderVideo, { HeroHeaderVideoTypes, HeroHeaderVideo_Query } from './global/HeroHeaderVideo';

type componentsMapTypes = { HeroHeaderVideo: HeroHeaderVideoTypes };

export type ComponentTypes = componentsMapTypes[keyof componentsMapTypes] & { _type: string; index: number };

export default function Components({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    item = { ...item, index };
    const componentType = item._type as keyof componentsMapTypes;
    const componentsMapTypes: Record<string, React.ReactNode> = {
      HeroHeaderVideo: <HeroHeaderVideo {...(item as HeroHeaderVideoTypes)} />,
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
    },
  `;
