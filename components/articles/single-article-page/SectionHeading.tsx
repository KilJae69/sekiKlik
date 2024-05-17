import styles from './section-heading.module.scss';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  date?: string;
  notLead?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  date,
  notLead,
}: SectionHeadingProps) => {
  return (
    <div className={`${styles.headingWrapper} ${notLead && styles.notLead}`}>
      <div className={styles.headingCardWrapper}>
        <span>{date}</span>
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
