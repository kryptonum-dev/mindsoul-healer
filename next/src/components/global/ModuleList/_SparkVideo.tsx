'use client';

import { useEffect, useRef, useState } from 'react';
import { SparkVideoTypes } from './ModuleList.types';

export default function SparkVideo({ url }: SparkVideoTypes) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const checkPlayPause = () => {
      if (!videoElement) return;
      if (isInView && isScrolling) {
        videoElement.play();
      } else if (!videoElement.paused) {
        videoElement.pause();
      }
    };

    const handleInView: IntersectionObserverCallback = ([entry]) => {
      setIsInView(entry.isIntersecting);
      checkPlayPause();
    };

    const observer = new IntersectionObserver(handleInView);

    if (containerElement) {
      observer.observe(containerRef.current);
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

  return <div ref={containerRef}>{isInView && <video ref={videoRef} autoPlay muted loop playsInline src={url} />}</div>;
}
