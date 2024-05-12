import styles from '@/components/layout/private/header/account-private-header.module.scss';
import Tools from '@/components/layout/private/components/tools';
import Link from 'next/link';
import Image from 'next/image';
import NotificationsIcon from '@/components/layout/private/components/notifications-icon';
import AccountButton from '@/components/layout/private/components/account-button';

export default function DesktopPrivateWrapper() {
  return (
    <div className={styles.inner}>
      <Tools />
      <Link href="/" className={styles.logoWrapper}>
        <Image
          src="/logo.svg"
          alt="Logo"
          priority
          fill
          className={styles.logo}
        />
      </Link>
      <div className={styles.rightButtons}>
        <NotificationsIcon />
        <AccountButton />
      </div>
    </div>
  );
}
