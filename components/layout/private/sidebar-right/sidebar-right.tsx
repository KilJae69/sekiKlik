import React from 'react';
import styles from './sidebar-right.module.scss';

interface SidebarRightProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  isMobile: boolean;
}

const SidebarRight: React.FC<SidebarRightProps> = ({
  children,
  isOpen,
  toggleOpen,
  isMobile,
}) => {
  return (
    <div
      className={`${styles.sidebarRight} ${isOpen ? styles.open : ''} ${isMobile && styles.mobile}`}
    >
      {children}
      <div className={styles.bcg} onClick={toggleOpen}>
        <p>Tap to Close </p>
      </div>
    </div>
  );
};

export default SidebarRight;
