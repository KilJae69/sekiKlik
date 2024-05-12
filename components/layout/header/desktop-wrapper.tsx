import styles from './header.module.scss';
import Logo from '@/components/layout/header/components/logo';
import MainNavigation from '@/components/layout/header/components/main-navigation';
import AuthBtns from '@/components/layout/header/components/auth-btns';
export default function DesktopWrapper() {
  return (
    <div className={styles.innerWrapper}>
      <Logo />
      <MainNavigation />
      <AuthBtns />
    </div>
  );
}
