import SectionHeading from '@/components/ui/SectionHeading';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderVideo.module.scss';
import type { HeroHeaderVideoTypes } from './HeroHeaderVideo.types';
import VideoBox from './_VideoBox';

export default function HeroHeaderVideo({
  sectionHeading,
  paragraph,
  image,
  videoId,
  cta,
  authorName,
  index,
}: HeroHeaderVideoTypes) {
  console.log(image);
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <SectionHeading {...sectionHeading} index={index} />
        <Markdown>{paragraph}</Markdown>
      </header>
      <div className={styles.box}>
        <VideoBox image={image} videoId={videoId} PlayIcon={PlayIcon} index={index} />
        <Markdown className={styles.author}>{authorName}</Markdown>
      </div>
      <div>
        <CtaButtonBox {...cta} />
      </div>
    </section>
  );
}

const PlayIcon = (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z'
    />
  </svg>
);
