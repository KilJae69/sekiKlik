import Link from 'next/link';
import styles from '@/components/layout/header/header.module.scss';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoWrapper}>
      <Image src="/logo.svg" alt="Logo" priority fill className={styles.logo} />
      <Image
        src="/logo-xs.svg"
        alt="Logo"
        priority
        fill
        className={styles.stickyLogo}
      />
    </Link>
  );
}
