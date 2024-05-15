'use client';
import { useState } from 'react';
import BentoButton from './BentoButton';
import styles from './JobCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const JobCard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isListView = true;

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div
      onClick={handleSidebarToggle}
      className={`${styles.cardContainer} ${isListView && styles.listView} ${toggleSidebar && styles.active}`}
    >
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/">
              <p>View applicants</p>
              <Image
                src="/icons/ico_thin_chevron.svg"
                width={8}
                height={16}
                alt="icon chevron"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Manage job</p>
              <Image
                src="/icons/ico_thin_chevron.svg"
                width={8}
                height={16}
                alt="icon chevron"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Repost a job</p>{' '}
              <Image
                src="/icons/ico_thin_chevron.svg"
                width={8}
                height={16}
                alt="icon chevron"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.innerContent}>
        <div className={styles.cardHeaderWrapper}>
          <div className={styles.cardHeader}>
            <span className={styles.badge}>
              <span>Active</span>
            </span>
            <span>Expires 22.02.2025.</span>
          </div>

          <h3>Web Developer</h3>
        </div>

        <div className={styles.locationSalary}>
          <p>Croatia</p>
          <p>
            <span>5,000</span>-<span>7,000</span>&euro;
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.candidatesWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.candidatesTotal}>
              <p>9</p>
              <p>/</p>
              <p>15</p>
            </div>
            <span>Candidates</span>
          </div>

          <div className={styles.progressWrapper}>
            <p>78%</p>
            <div className={styles.circleWrapper}>
              <div className={styles.outer}>
                <div className={styles.inner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <BentoButton />
      </div>
    </div>
  );
};

export default JobCard;
