import Image from 'next/image';
import styles from './only-icon-button.module.scss';

interface OnlyIconButtonProps {
  icon: string;
}

const OnlyIconButton = ({ icon }: OnlyIconButtonProps) => {
  return (
    <button className={styles.btn}>
      <div className={styles.iconWrapper}>
        <div className={styles.bg}></div>
        <Image src={icon} fill alt="ico-envelope" />
      </div>
    </button>
  );
};

export default OnlyIconButton;
