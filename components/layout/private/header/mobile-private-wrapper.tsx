import styles from '@/components/layout/private/header/account-private-header.module.scss';
import Tools from '@/components/layout/private/components/tools';
import Link from 'next/link';
import Image from 'next/image';
import NotificationsIcon from '@/components/layout/private/components/notifications-icon';
import AccountButton from '@/components/layout/private/components/account-button';

export default function MobilePrivateWrapper() {
  return (
    <div className={styles.mobileInner}>
      <div className={styles.top}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/logo.svg"
            alt="Logo"
            priority
            fill
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.bottom}>
        <Tools />
        <NotificationsIcon />
        <AccountButton />
      </div>
    </div>
  );
}
