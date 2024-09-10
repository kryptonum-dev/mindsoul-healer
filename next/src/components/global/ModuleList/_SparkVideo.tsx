'use client';

import { useEffect, useRef } from 'react';
import { SparkVideoTypes } from './ModuleList.types';

export default function SparkVideo({ url }: SparkVideoTypes) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let isInView = false;
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    if (!videoElement) return;

    const checkPlayPause = () => {
      if (isInView && isScrolling) {
        videoElement.play();
      } else if (!videoElement.paused) {
        videoElement.pause();
      }
    };

    const handleInView: IntersectionObserverCallback = ([entry]) => {
      isInView = entry.isIntersecting;
      checkPlayPause();
    };

    const observer = new IntersectionObserver(handleInView);

    if (videoElement) {
      observer.observe(videoElement);
    }

    const handleScroll = () => {
      isScrolling = true;
      checkPlayPause();

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        checkPlayPause();
      }, 350);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return <video ref={videoRef} autoPlay muted loop playsInline preload='auto' src={url} />;
}
