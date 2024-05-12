'use client';
import SidebarRight from '@/components/layout/private/sidebar-right/sidebar-right';
import styles from './account-sidebar.module.scss';
import { useBoundStore } from '@/stores/store';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';
import { useAccountNavigationData } from '@/config/config-navigation';
import NavLink, {
  AccountNavLink,
} from '@/components/layout/private/components/nav-link';
type AccountSidebarProps = {
  isMobile: boolean;
};
export default function AccountSidebar({ isMobile }: AccountSidebarProps) {
  const isAccountSidebarOpen = useBoundStore(
    (state) => state.isAccountSidebarOpen,
  );
  const toggleIsAccountSidebarOpen = useBoundStore(
    (state) => state.toggleIsAccountSidebarOpen,
  );
  const data = useAccountNavigationData();
  return (
    <SidebarRight
      isOpen={isAccountSidebarOpen}
      toggleOpen={toggleIsAccountSidebarOpen}
      isMobile={isMobile}
    >
      <div className={`${styles.accountWrapper} ${isMobile && styles.mobile}`}>
        <div className={styles.inner}>
          <div className={styles.topSection}>
            <h2>Hello John!</h2>
            <button type="button" onClick={toggleIsAccountSidebarOpen}>
              <Image
                src="/icons/ico_close.svg"
                alt="Close"
                width={25}
                height={25}
              />
            </button>
          </div>
          <div className={styles.planSection}>
            <div className={styles.titleWrapper}>
              <h3>Your Plan</h3>
              <span></span>
            </div>
            <div className={styles.planInfo}>
              <div>
                <p>Yearly</p>
                <h4>Bussiness</h4>
              </div>
              <div>
                <p>Expires in</p>
                <h4>7 days</h4>
              </div>
            </div>
            <PrimaryButton
              label="Upgrade Plan"
              additionalClasses={styles.button}
            />

            <div className={styles.navSection}>
              <div className={styles.titleWrapper}>
                <h3>account settings</h3>
                <span></span>
              </div>
              <nav>
                <ul>
                  {data.map((item) => (
                    <li key={item.title}>
                      <AccountNavLink item={item} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </SidebarRight>
  );
}
