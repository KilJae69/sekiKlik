import styles from './social-box.module.scss';
import Image from 'next/image';
export default function SocialBox() {
  return (
    <ul className={styles.socialBox}>
      <li>
        <a href="#">
          <Image
            src="/icons/ico_face.svg"
            alt="Facebook"
            width={13}
            height={24}
          />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src="/icons/ico_x.svg" alt="X" width={22} height={22} />
        </a>
      </li>
      <li>
        <a href="#">
          <Image
            src="/icons/ico_linkedin.svg"
            alt="linkedin"
            width={22}
            height={22}
          />
        </a>
      </li>
    </ul>
  );
}
