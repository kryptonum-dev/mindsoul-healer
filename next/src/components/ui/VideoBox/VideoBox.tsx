'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './VideoBox.module.scss';
import type { VideoBoxTypes } from './VideoBox.types';

export default function VideoBox({
  videoId,
  children,
  title,
  options = { controls: true, muted: false, loop: false },
}: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  return null;

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
        {children}
        <div className={styles.play} aria-hidden={!showPlayButton}>
          <PlayIcon />
        </div>
      </button>
      {isOpen && (
        <div className={styles.video} data-loading={isLoading} data-open={isOpen}>
          <iframe
            ref={videoRef}
            onLoad={() => setIsLoading(false)}
            title={title}
            src={`https://player.vimeo.com/video/${videoId}?h=8f0ffe497b&title=0&byline=0&&portrait=0&dnt=1&autoplay=1${options.muted ? '&muted=1' : ''}${options.controls ? '' : '&controls=0'}${options.loop ? '&loop=1' : ''}`}
            allow='autoplay; fullscreen'
          ></iframe>
          {!options.controls && (
            <button
              className={styles.stop}
              aria-label='Zamknij wideo'
              onClick={() => {
                setIsOpen(false);
                setShowPlayButton(true);
              }}
            ></button>
          )}
          <div className='loader'>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}

const PlayIcon = () => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z' />
  </svg>
);
