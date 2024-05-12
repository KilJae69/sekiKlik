'use client';
import styles from './header.module.scss';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useCallback, useEffect, useState } from 'react';
import useThrottle from '@/hooks/useThrottle';
import DesktopWrapper from '@/components/layout/header/desktop-wrapper';
import MobileWrapper from '@/components/layout/header/mobile-wrapper';
export default function MainHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, loading] = useScrollPosition(30);
  const isScrolled = scrollPosition > 30;
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 992);
  }, []);

  const throttledResize = useThrottle(handleResize, 200);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
    };
  }, [handleResize, throttledResize]);

  return (
    <header
      className={`${styles.mainHeader} ${isScrolled && styles.scrolled} ${loading && styles.loading}`}
    >
      {isMobile ? <MobileWrapper /> : <DesktopWrapper />}
    </header>
  );
}
