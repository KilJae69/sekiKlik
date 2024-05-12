'use client';
import styles from './account-private-header.module.scss';
import { useCallback, useEffect, useState } from 'react';
import useThrottle from '@/hooks/useThrottle';
import MobilePrivateWrapper from '@/components/layout/private/header/mobile-private-wrapper';
import DesktopPrivateWrapper from '@/components/layout/private/header/desktop-private-wrapper';
import MainNavigationSidebar from '@/components/layout/private/components/main-navigation-sidebar';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useBoundStore } from '@/stores/store';
import AccountSidebar from '@/components/layout/private/components/account-sidebar';

export default function AccountPrivateHeader() {
  const isMainSidebarOpen = useBoundStore((state) => state.isMainSidebarOpen);
  const isAccountSidebarOpen = useBoundStore(
    (state) => state.isAccountSidebarOpen,
  );
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
    <>
      <header
        className={`${styles.accountPrivateHeader} ${isMobile && styles.mobilePrivateHeader} ${(isScrolled || isMainSidebarOpen || isAccountSidebarOpen) && styles.scrolled} ${isMainSidebarOpen && styles.navOpen} ${loading && styles.loading}`}
      >
        {isMobile ? <MobilePrivateWrapper /> : <DesktopPrivateWrapper />}
      </header>
      <MainNavigationSidebar isMobile={isMobile} />
      <AccountSidebar isMobile={isMobile} />
    </>
  );
}
