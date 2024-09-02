import HeadingWithColumns from './HeadingWithColumns';

export default HeadingWithColumns;
export type { HeadingWithColumnsTypes } from './HeadingWithColumns.types';

export const HeadingWithColumns_Query = /* groq */ `
    _type == "HeadingWithColumns" => {
        sectionHeading,
        columns[]{
        heading,
        content
        },
    },

`;
