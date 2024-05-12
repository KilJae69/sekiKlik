import Link from 'next/link';
import styles from '@/components/layout/header/header.module.scss';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

export default function AuthBtns() {
  return (
    <div className={styles.authBtns}>
      <Link href="/login" className={styles.loginLink}>
        <span>Login</span>
      </Link>
      <PrimaryButton label="Register" url="/register" />
    </div>
  );
}
