import styles from './account-public-header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/common/back-button/back-button';

export default function AccountPublicHeader() {
  return (
    <header className={styles.accountPublicHeader}>
      <div className={styles.inner}>
        <BackButton additionalClass={styles.backButtonWrapper} />
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
    </header>
  );
}
