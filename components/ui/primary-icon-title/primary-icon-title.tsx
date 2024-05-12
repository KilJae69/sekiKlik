import Image from 'next/image';
import styles from './primary-icon-title.module.scss';
interface PrimaryIconTitleProps {
  title: string;
  icon: {
    url: string;
    alt: string;
  };
}

export default function PrimaryIconTitle({
  icon,
  title,
}: PrimaryIconTitleProps) {
  return (
    <div className={styles.titleDiv}>
      <div className={styles.iconWrapper}>
        <Image src={icon.url} alt={icon.alt} fill />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
