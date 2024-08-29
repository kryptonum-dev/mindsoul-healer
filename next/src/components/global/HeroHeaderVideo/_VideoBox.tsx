'use client';

import { useState } from 'react';
import Img from '@/components/ui/image';
import styles from './HeroHeaderVideo.module.scss';
import type { VideoBoxTypes } from './HeroHeaderVideo.types';

export default function VideoBox({ image, videoId, PlayIcon, index }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  return (
    <div className={styles.videoBox}>
      <button
        className={styles.open}
        data-loading={isLoading}
        data-open={isOpen}
        aria-label='Otwórz wideo'
        onClick={() => {
          setIsOpen(true);
          setIsLoading(true);
          setShowPlayButton(false);
        }}
      >
        <Img data={image} sizes='(max-width: 659px) 328px, 381px' priority={index === 0} />
        <div className={styles.play} aria-hidden={!showPlayButton}>
          {PlayIcon}
        </div>
      </button>
      {isOpen && (
        <div className={styles.video} data-loading={isLoading} data-open={isOpen}>
          <iframe
            onLoad={() => setIsLoading(false)}
            title='Film promocyjny'
            src={`https://player.vimeo.com/video/${videoId}?h=8f0ffe497b&title=0&byline=0&loop=1&portrait=0&dnt=1&autoplay=1`}
            allow='autoplay; fullscreen'
          ></iframe>
          <div className='loader'>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}
