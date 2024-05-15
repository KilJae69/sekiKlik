import BentoButton from './BentoButton';
import styles from './JobCard.module.scss';

const JobCard = () => {
  return (
    <div className={styles.cardContainer}>
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
          <span>5,000</span>-<span>7,000</span>&euro;
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
