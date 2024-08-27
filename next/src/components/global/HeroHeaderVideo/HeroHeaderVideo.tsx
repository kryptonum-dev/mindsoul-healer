import SectionHeading from '@/components/ui/SectionHeading';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderVideo.module.scss';
import type { HeroHeaderVideoTypes } from './HeroHeaderVideo.types';

export default function HeroHeaderVideo({
  sectionHeading,
  paragraph,
  image,
  videoId,
  cta,
  index,
}: HeroHeaderVideoTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <SectionHeading {...sectionHeading} index={index} />
        <Markdown>{paragraph}</Markdown>
      </header>
      {/* <div>video</div> */}
      <CtaButtonBox {...cta} />
    </section>
  );
}
