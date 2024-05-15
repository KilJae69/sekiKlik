import Image from 'next/image';
import styles from './jobs-heading.module.scss';
import ViewToggle from './ViewToggle';

const JobsHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <Image
          src="/icons/ico_jobs.svg"
          width={35}
          height={35}
          alt="jobs icon"
        />
        <h1>Jobs</h1>
      </div>

      <ViewToggle />
    </div>
  );
};

export default JobsHeading;
