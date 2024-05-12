import styles from './account-button.module.scss';
import Image from 'next/image';
import { useBoundStore } from '@/stores/store';

export default function AccountButton() {
  const toggleIsAccountSidebarOpen = useBoundStore(
    (state) => state.toggleIsAccountSidebarOpen,
  );
  return (
    <div className={styles.accountButton} onClick={toggleIsAccountSidebarOpen}>
      <Image
        src="/icons/ico_person.svg"
        alt="Person Icon"
        priority
        width={28}
        height={25}
      />
      <p>Account</p>
    </div>
  );
}
