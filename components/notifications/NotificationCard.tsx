'use client';
import { useState } from 'react';
import IconButton from '../ui/iconbutton/iconbutton';

import styles from './notification-card.module.scss';

const NotificationCard = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={`${styles.cardWrapper} ${isToggled && styles.active}`}>
      <div className={styles.contentWrapper}>
        <div
          onClick={() => setIsToggled(!isToggled)}
          className={styles.toggle}
        ></div>
        <div className={styles.textWrapper}>
          <h3>Company name</h3>
          <p>This is a message from some company, please apply for a job</p>
          <div>
            <span>13:59</span> <span>/</span> <span>01.02.2024</span>
          </div>
        </div>
      </div>

      <div className={styles.btnGroup}>
        <IconButton
          additionalClasses={styles.btn}
          label="Decline"
          icon="/icons/xmark-adi.svg"
        />
        <IconButton
          additionalClasses={styles.btn}
          label="Accept"
          icon="/icons/checkmark-adi.svg"
        />
      </div>
    </div>
  );
};

export default NotificationCard;
