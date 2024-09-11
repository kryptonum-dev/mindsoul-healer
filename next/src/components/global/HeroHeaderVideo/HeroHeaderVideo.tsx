import Heading from '@/components/ui/Heading';
import VideoBox from '@/components/ui/VideoBox';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderVideo.module.scss';
import type { HeroHeaderVideoTypes } from './HeroHeaderVideo.types';

export default function HeroHeaderVideo({
  sectionHeading,
  paragraph,
  image,
  videoId,
  cta,
  authorName,
  index,
}: HeroHeaderVideoTypes) {
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Heading {...sectionHeading} dark hierarchy={index === 0 ? 'h1' : 'h2'} />
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <div className={styles.box}>
          <VideoBox title='Film powitalny' videoId={videoId}>
            <Img data={image} sizes='(max-width: 659px) 328px, 381px' priority={index === 0} />
          </VideoBox>
          <Markdown className={styles.author}>{authorName}</Markdown>
        </div>
        <div>
          <CtaButtonBox {...cta} dark />
        </div>
      </div>
    </section>
  );
}
