import styles from './notification-icon.module.scss';
import Image from 'next/image';

export default function NotificationsIcon() {
  return (
    <div className={styles.notificationButton}>
      <div className={styles.iconWrapper}>
        <Image
          src="/icons/ico_bell.svg"
          alt="Bell Icon"
          priority
          width={25}
          height={25}
        />
        <span>2</span>
      </div>
      <p>Notifications</p>
    </div>
  );
}
