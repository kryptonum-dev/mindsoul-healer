import QuestionSection from './QuestionSection';

export default QuestionSection;
export type { QuestionSectionTypes } from './QuestionSection.types';

export const QuestionSection_Query = /* groq */ `
    _type == "QuestionSection" => {
        sectionHeading,
        questionList[]{
            questionText,
            answer,
        },
        email,
},
`;
