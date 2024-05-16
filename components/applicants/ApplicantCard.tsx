import Image from 'next/image';
import styles from './applicant-card.module.scss';
import UserImage from '../common/UserImage';

const ApplicantCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
          <UserImage src="/images/rosy.jpg" />

          <div className={styles.dataWrapper}>
            <h4>Johanes Doesentis Jr.</h4>
            <p>
              <span>5,000</span>-<span>7,000</span>&euro;
            </p>
            <p>Croatia</p>
          </div>
        </div>

        <div className={styles.statusWrapper}>
          <span>Match</span>
          <span>Interview in progress</span>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button>
          <span>2</span>
          <Image
            src="/icons/ico_chats.svg"
            width={26}
            height={26}
            alt="phone icon"
          />
        </button>
        <button>
          <Image
            src="/icons/ico_person.svg"
            width={26}
            height={26}
            alt="phone icon"
          />
        </button>
        <button>
          <Image
            src="/icons/ico_person.svg"
            width={26}
            height={26}
            alt="phone icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;
