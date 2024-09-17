import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './VideoEmbedHeading.module.scss';
import type { VideoEmbedHeadingTypes } from './VideoEmbedHeading.types';

export default function VideoEmbedHeading({ sectionHeading, paragraph, videoID, index }: VideoEmbedHeadingTypes) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} max-width`}>
        <header>
          <Heading dark {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        </header>
        <div className={styles.embed}>
          <iframe
            src={`https://player.vimeo.com/video/${videoID}?dnt=1&title=0&byline=0&portrait=0&loop=1`}
            title={`${sectionHeading.heading} ${sectionHeading.subheading}`}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
