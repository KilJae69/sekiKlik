import styles from './main-navigation-sidebar.module.scss';
import { useBoundStore } from '@/stores/store';
import { useMainNavigationData } from '@/config/config-navigation';
import NavLink from '@/components/layout/private/components/nav-link';
type MainNavigationSidebarProps = {
  isMobile: boolean;
};
export default function MainNavigationSidebar({
  isMobile,
}: MainNavigationSidebarProps) {
  const isMainSidebarOpen = useBoundStore((state) => state.isMainSidebarOpen);
  const toggleIsMainSidebarOpen = useBoundStore(
    (state) => state.toggleIsMainSidebarOpen,
  );
  const data = useMainNavigationData();
  return (
    <div
      className={`${styles.mainNavigationSidebar} ${isMainSidebarOpen && styles.open} ${isMobile && styles.mobile}`}
    >
      <div className={styles.inner}>
        <h3>Tools</h3>
        <nav>
          <ul>
            {data.map((item) => (
              <li key={item.title}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bcg} onClick={toggleIsMainSidebarOpen}>
        <p>Tap to Close </p>
      </div>
    </div>
  );
}
