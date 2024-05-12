'use client';
import MainFooter from '@/components/layout/footer/main-footer';
import React from 'react';
import AccountPrivateHeader from '@/components/layout/private/header/account-private-header';
import { useBoundStore } from '@/stores/store';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMainSidebarOpen = useBoundStore((state) => state.isMainSidebarOpen);
  return (
    <>
      <AccountPrivateHeader />
      <main
        className={`dashboard-private ${isMainSidebarOpen && 'sidebar-open'}`}
      >
        <div className="inner-wrapper">{children}</div>
      </main>
      <MainFooter isPrivate={true} />
    </>
  );
}
