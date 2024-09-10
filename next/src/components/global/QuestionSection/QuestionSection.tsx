import getLegalLinks from '@/utils/get-legal-links';
import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './QuestionSection.module.scss';
import type { QuestionSectionTypes } from './QuestionSection.types';
import Copy from './_Copy';
import Question from './_Question';

export default async function QuestionSection({ sectionHeading, questionList, email, index }: QuestionSectionTypes) {
  const { privacyPolicy } = await getLegalLinks();

  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>
      <div className={styles.text}>
        {questionList.map(({ questionText, answer }, i) => (
          <>
            <Subheading>{questionText}</Subheading>
            <Markdown>{answer}</Markdown>
          </>
        ))}
      </div>
      <div className={styles.box}>
        <Question privacyPolicy={privacyPolicy} ArrowIcon={<ArrowIcon />} index={index} />
        <div className={styles.line}>
          <LineIcon />
        </div>
        <div className={styles.mail}>
          <span>Lub napisz na maila</span>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
            <Copy email={email} />
          </div>
        </div>
      </div>
    </section>
  );
}

const LineIcon = () => (
  <svg width={11} height={15} viewBox='0 0 11 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.532 15.0041C2.852 15.0041 1.748 14.0761 1.748 12.6361C1.748 11.5641 2.548 10.7161 3.54 10.7161C4.468 10.7161 5.044 11.2441 5.044 12.0921C5.044 12.8761 4.452 13.3401 4.052 13.3401C3.748 13.3401 3.508 13.2921 3.348 13.1801C3.348 13.9961 3.844 14.4281 4.724 14.4281C6.292 14.4281 7.412 13.1001 7.412 9.78809V9.10009L6.852 9.13209L5.012 9.21209C2.388 9.21209 0.5 7.94809 0.5 5.51609C0.5 3.19609 2.34 1.98009 4.5 1.98009H7.412V1.56409C7.412 1.26009 7.364 0.812094 7.284 0.252093L8.372 -0.00390625C8.34 0.220094 8.292 0.876094 8.212 1.98009H10.836L10.708 2.84409C9.316 2.71609 8.468 2.65209 8.18 2.65209L8.148 4.47609V8.86009C8.148 12.0121 7.748 13.4841 6.66 14.3481C6.116 14.7801 5.412 15.0041 4.532 15.0041ZM7.412 8.52409V2.65209H5.972C5.892 3.37209 5.844 4.25209 5.844 5.30809C5.844 6.33209 5.908 7.30809 6.036 8.25209C6.372 8.42809 6.82 8.52409 7.412 8.52409Z'
      fill='#CCCCCC'
    />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' viewBox='0 0 16 16'>
    <g fill='currentColor'>
      <path d='M9.52827 6.19526C9.78862 5.93491 10.2107 5.93491 10.4711 6.19526L13.8044 9.5286C14.0648 9.78894 14.0648 10.2111 13.8044 10.4714L10.4711 13.8047C10.2107 14.0651 9.78862 14.0651 9.52827 13.8047C9.26792 13.5444 9.26792 13.1223 9.52827 12.8619L12.3902 10L9.52827 7.13807C9.26792 6.87772 9.26792 6.45561 9.52827 6.19526Z' />
      <path d='M2.66667 2C3.03486 2 3.33333 2.29848 3.33333 2.66667V7.33333C3.33333 7.86377 3.54405 8.37247 3.91912 8.74755C4.29419 9.12262 4.8029 9.33333 5.33333 9.33333H13.3333C13.7015 9.33333 14 9.63181 14 10C14 10.3682 13.7015 10.6667 13.3333 10.6667H5.33333C4.44928 10.6667 3.60143 10.3155 2.97631 9.69036C2.35119 9.06523 2 8.21739 2 7.33333V2.66667C2 2.29848 2.29848 2 2.66667 2Z' />
    </g>
  </svg>
);
