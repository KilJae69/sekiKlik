import styles from './applicant-sidebar-info.module.scss';

const ApplicantSidebarInfo = ({
  label,
  info,
}: {
  label?: string;
  info: string;
}) => {
  if (!label) {
    return <p className={styles.wallOfText}>{info}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h4>{label}</h4>
      <p>{info}</p>
    </div>
  );
};

export default ApplicantSidebarInfo;
