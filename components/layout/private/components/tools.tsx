import Image from 'next/image';
import styles from './tools.module.scss';
import { useBoundStore } from '@/stores/store';

export default function Tools() {
  const toggleIsMainSidebarOpen = useBoundStore(
    (state) => state.toggleIsMainSidebarOpen,
  );
  const isMainSidebarOpen = useBoundStore((state) => state.isMainSidebarOpen);
  return (
    <div className={styles.toolsButton} onClick={toggleIsMainSidebarOpen}>
      <Image
        src="/icons/ico_thin_chevron.svg"
        alt="Chevron icon"
        priority
        width={9}
        height={16}
        className={`${styles.chevron} ${isMainSidebarOpen ? styles.open : ''}`}
      />
      <Image
        src="/icons/ico_tools.svg"
        alt="Tools icon"
        priority
        width={25}
        height={25}
      />
      <p>Tools</p>
    </div>
  );
}
