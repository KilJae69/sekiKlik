import styles from './sidebar-data-subtitle.module.scss';
const SidebarDataSubtitle = ({ label }: { label: string }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{label}</h3>
      <div></div>
    </div>
  );
};

export default SidebarDataSubtitle;
