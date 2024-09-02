import TwoBoxesCta from './TwoBoxesCta';

export default TwoBoxesCta;
export type { TwoBoxesCtaTypes } from './TwoBoxesCta.types';

export const TwoBoxesCta_Query = /* groq */ `
    _type == "TwoBoxesCta" => {
        sectionHeading,
        list[],
    },

`;
