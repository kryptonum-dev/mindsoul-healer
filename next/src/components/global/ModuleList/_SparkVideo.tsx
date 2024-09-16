'use client';

import { useEffect, useRef, useState } from 'react';
import { SparkVideoTypes } from './ModuleList.types';

export default function SparkVideo({ url }: SparkVideoTypes) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const containerElement = containerRef.current;
    let inView = false;
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const checkPlayPause = () => {
      const videoElement = videoRef.current;

      if (!videoElement) return;
      if (inView && isScrolling) {
        videoElement.play();
      } else if (!videoElement.paused) {
        videoElement.pause();
      }
    };

    const handleInView: IntersectionObserverCallback = ([entry]) => {
      inView = entry.isIntersecting;
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
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, []);

  return <div ref={containerRef}>{isInView && <video ref={videoRef} autoPlay muted loop playsInline src={url} />}</div>;
}
