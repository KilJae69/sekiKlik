'use client';

import Image from 'next/image';
import styles from './view-toggle.module.scss';

const ViewToggle = () => {
  return (
    <div className={styles.container}>
      <p>
        <span>List</span> View
      </p>
      <Image src="/icons/ico_list.svg" width={22} height={13} alt="list view" />
    </div>
  );
};

export default ViewToggle;
