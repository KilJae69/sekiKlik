import styles from '../header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
interface RsButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}
export default function RsButton({ isMenuOpen, setIsMenuOpen }: RsButtonProps) {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.rsWrapper}>
      <Link href="/" className={styles.accountWrapper}>
        <Image
          src="/icons/ico_acc.svg"
          alt="Account icon"
          width={27}
          height={24}
        />
      </Link>
      <button
        type="button"
        className={`${styles.rsButton} ${isMenuOpen && styles.active}`}
        onClick={handleClick}
      >
        Hamburger Icon
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
}
