import { Fragment } from 'react';
import getLegalLinks from '@/utils/get-legal-links';
import Heading from '@/components/ui/Heading';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ModuleList.module.scss';
import type { ModuleListTypes } from './ModuleList.types';
import Form from './_Form';
import SparkVideo from './_SparkVideo';

export default async function ModuleList({
  sectionHeading,
  paragraph,
  image,
  list,
  form,
  cta,
  index,
  video,
}: ModuleListTypes) {
  const { privacyPolicy } = await getLegalLinks();
  const Subheading = index === 0 ? 'h2' : 'h3';

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Img
          data={image}
          sizes='(max-width: 419px) 242px, (max-width: 679px) 60vw, (max-width: 1023px) 451px, (max-width: 1259px) 38vw, 461px'
        />
        {!!video && <SparkVideo url={video} />}
      </div>
      <div className={styles.container}>
        <header>
          <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
          <Markdown>{paragraph}</Markdown>
        </header>
        <ul className={styles.moduleList}>
          {list.map(({ moduleName, moduleDuration, lessonList }, moduleIndex) => (
            <li key={moduleIndex} className={styles.module}>
              <div className={styles.flag}>
                <FlagIcon />
              </div>
              <div className={styles.content}>
                <header className={styles.info}>
                  <Subheading className={styles.moduleName}>
                    Moduł {moduleIndex + 1}. {moduleName}
                  </Subheading>
                  <p className={styles.duration}>
                    <ClockIcon />
                    <span>{moduleDuration} min</span>
                  </p>
                </header>
                <ul className={styles.lessonList} key={moduleIndex}>
                  {lessonList?.map((name, lessonIndex) => (
                    <Fragment key={lessonIndex}>
                      <li className={styles.lesson}>
                        <BulletList />
                        <span>{name}</span>
                      </li>
                      {moduleIndex === 0 && lessonIndex === 0 && (
                        <Form
                          {...form}
                          index={index}
                          privacyPolicy={privacyPolicy}
                          video={form.videoID}
                          thumbnail={form.videoThumbnail}
                          heading={
                            index === 0 ? (
                              <Markdown.h3>{form.formHeading}</Markdown.h3>
                            ) : (
                              <Markdown.h4>{form.formHeading}</Markdown.h4>
                            )
                          }
                        />
                      )}
                    </Fragment>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.box}>
        <CtaButtonBox {...cta} />
      </div>
    </section>
  );
}

const FlagIcon = () => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g fillRule='evenodd' clipRule='evenodd' fill='#070101'>
      <path d='M3.002 1.048C3.506.846 4.258.667 5.333.667c1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.787 1.787 0 0 0 .375-.2A.667.667 0 0 1 14 2v8c0 .177-.07.346-.195.471L13.333 10c.472.471.471.472.471.472l-.002.002-.003.003-.008.007a.69.69 0 0 1-.066.06 1.95 1.95 0 0 1-.157.115 3.109 3.109 0 0 1-.57.293c-.504.202-1.256.381-2.331.381-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287a1.788 1.788 0 0 0-.375.2A.667.667 0 0 1 2 10V2c0-.177.07-.347.195-.472L2.667 2a43.651 43.651 0 0 1-.471-.472v-.001a.209.209 0 0 1 .012-.011 1.036 1.036 0 0 1 .067-.06c.04-.032.091-.071.157-.115.132-.088.319-.193.57-.293Zm.331 1.31v6.573c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a2.26 2.26 0 0 0 .165-.073V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.286-.064.026-.118.05-.165.074Zm-.196 8.115Z' />
      <path d='M2.667 9.334c.368 0 .666.298.666.666v4.667a.667.667 0 1 1-1.333 0V10c0-.368.298-.666.667-.666Z' />
    </g>
  </svg>
);

const ClockIcon = () => (
  <svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g fillRule='evenodd' clipRule='evenodd' fill='#070101'>
      <path d='M8 2.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-7.333 6a7.333 7.333 0 1 1 14.667 0 7.333 7.333 0 0 1-14.667 0Z' />
      <path d='M8 3.833c.368 0 .666.299.666.667v2.921l1.702-.85a.667.667 0 0 1 .596 1.192L8.298 9.096a.667.667 0 0 1-.965-.596v-4c0-.368.298-.667.667-.667Z' />
    </g>
  </svg>
);

const BulletList = () => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.882 16.8c-1.727 0-3.895-.489-5.324-1.576H6.41c-.565-.6-.848-1.703-.848-3.263 0-1.183.346-2.475.832-3.027.048-.016.629.032.88.032.55 0 .754-.032 1.65-.741.973-.773 1.601-1.025 2.544-1.025 1.084 0 1.963.142 2.623.41.69.284 1.24.441 1.523.52.189.047.377.142.503.236.455.032.91.064 1.366.11.723.08 1.634.19 2.278.269 1.288.157 1.838.52 1.838 1.277 0 .74-.519 1.087-1.54 1.087-.36 0-1.1-.047-1.759-.047-.502 0-.99.032-1.445.063.189.268.252.536.252.914 0 .505-.22.804-.676 1.01-.141.062-.22.125-.22.236 0 .173.157.41.157.71 0 .535-.267.913-.77 1.087-.14.047-.156.079-.156.315 0 .946-.896 1.403-2.56 1.403Zm0-.536h.629a6.533 6.533 0 0 1-1.068-.457c-.629-.331-1.163-.757-1.398-1.104a.951.951 0 0 1-.047-.315c0-.205.094-.394.204-.52-.393-.205-.739-.41-.911-.552a.878.878 0 0 1-.173-.473c-.283.095-.597.127-.958.127-.251 0-.519-.032-.707-.08v-.551c.173.047.503.063.707.063.44 0 .785-.047 1.068-.19a.898.898 0 0 1 .707-.456 1.47 1.47 0 0 1-.079-.457c0-.536.346-.994.99-.994.235 0 .47.08.722.174.079-.11.173-.237.252-.378-.346-.095-.613-.221-.723-.332l.424-.378c.189.205 1.87.52 2.513.52.424 0 .833-.268.833-.85v-.159h-.016c0-.047-.204-.173-.377-.22-.283-.08-.88-.252-1.602-.552-.581-.236-1.398-.363-2.403-.363-.817 0-1.32.205-2.2.915-.926.74-1.287.851-1.994.851-.157 0-.408-.016-.597-.032-.314.552-.55 1.545-.55 2.46 0 1.26.189 2.16.55 2.695h1.068c1.147.977 3.126 1.608 5.136 1.608Zm-7.979-.52c-1.02 0-1.303-2.223-1.303-3.673 0-1.434.298-3.689 1.303-3.689h1.178c.189 0 .314.142.314.379v.031c-.078-.094-.125-.11-.235-.11-.88 0-1.115 1.97-1.115 3.389 0 1.45.282 3.405 1.115 3.405.11 0 .173-.047.235-.158v.11c0 .174-.078.316-.314.316H4.903Zm9.786-4.635c.11-.378.565-.567 1.02-.567.283 0 .44.016.582.047.628-.031 1.398-.094 2.01-.094.676 0 1.414.047 1.76.047.753 0 .973-.158.973-.52 0-.394-.33-.552-1.35-.71a51.434 51.434 0 0 0-2.278-.268c-.283-.031-.628-.047-.99-.078v.078c0 .915-.628 1.435-1.35 1.435-.409 0-1.084-.095-1.697-.237a4.09 4.09 0 0 1-.267.442h.016c.267.094.754.3 1.57.425Zm.55 1.813c.25 0 .486-.094.895-.347.345-.22.408-.268.408-.488 0-.379-.047-.741-.346-.978-.11-.015-.204-.015-.282-.015-.597 0-.77.236-.77.646-1.02-.11-1.586-.315-2.167-.536-.393-.126-.817-.426-1.163-.378-.172.015-.408.11-.408.41 0 .126.078.33.094.378.299.236.895.615 1.916.977.613.22 1.414.331 1.822.331Zm-.252 1.75c.487 0 .88-.174.88-.615 0-.252-.063-.489-.126-.646a1.011 1.011 0 0 1-.424.079c-.361 0-1.304-.142-1.98-.363a8.919 8.919 0 0 1-1.9-.883.987.987 0 0 0-.345-.079c-.283 0-.456.253-.456.52 0 .127.047.269.11.363.299.221 1.335.757 2.026 1.025.927.362 1.618.599 2.215.599Zm-.597 1.214c.503 0 .581-.394.581-.63 0-.032 0-.064-.015-.095h-.11c-.864 0-1.65-.394-2.23-.631-.252-.11-.582-.252-.896-.41a.715.715 0 0 0-.189.394c.173.237.582.568 1.006.804.565.316.895.568 1.853.568Z'
      fill='currentColor'
    />
  </svg>
);
