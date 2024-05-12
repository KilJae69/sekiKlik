import Link from 'next/link';
import styles from './nav-link.module.scss';
import { useBoundStore } from '@/stores/store';
interface NavItem {
  icon: JSX.Element;
  title: string;
  path: string;
}

interface NavLinkProps {
  item: NavItem;
}
const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const toggleIsMainSidebarOpen = useBoundStore(
    (state) => state.toggleIsMainSidebarOpen,
  );
  return (
    <Link
      href={item.path}
      className={styles.link}
      onClick={toggleIsMainSidebarOpen}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export const AccountNavLink: React.FC<NavLinkProps> = ({ item }) => {
  const toggleIsAccountSidebarOpen = useBoundStore(
    (state) => state.toggleIsAccountSidebarOpen,
  );
  return (
    <Link
      href={item.path}
      className={styles.link}
      onClick={toggleIsAccountSidebarOpen}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default NavLink;
