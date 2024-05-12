import React from 'react';
import AccountPublicHeader from '@/components/layout/accountpublic/account-public-header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AccountPublicHeader />
      <main>{children}</main>
    </>
  );
}
