'use client';

import styles from './header.module.scss';
import Logo from '@/components/layout/header/components/logo';
import RsButton from '@/components/layout/header/components/rs-button';
import { useState } from 'react';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

export default function MobileWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.innerWrapper}>
      <Logo />
      <PrimaryButton
        label="Register"
        url="/register"
        additionalClasses={styles.mobileRegister}
      />
      <RsButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
