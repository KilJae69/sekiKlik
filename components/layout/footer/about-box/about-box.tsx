import styles from './about-box.module.scss';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

export default function AboutBox() {
  return (
    <section className={styles.aboutBox}>
      <div className={`container-xl ${styles.inner}`}>
        <div className={styles.leftColumn}>
          <h2>
            About <span>Jobklik global</span>
          </h2>
          <p className="body-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi
          </p>
          <div className={styles.counterBoxes}>
            <div className={styles.singleBox}>
              <h4>Job providers</h4>
              <h3>12,345</h3>
              <Image
                src="/icons/ico_hand.svg"
                alt="testimonial"
                width={65}
                height={28}
              />
            </div>
            <div className={styles.singleBox}>
              <h4>Job seekers</h4>
              <h3>521,345</h3>
              <Image
                src="/icons/ico_hand.svg"
                alt="testimonial"
                width={65}
                height={28}
              />
            </div>
            <div className={styles.singleBox}>
              <h4>Jobs</h4>
              <h3>32,345</h3>
              <Image
                src="/icons/ico_hand.svg"
                alt="testimonial"
                width={65}
                height={28}
              />
            </div>
          </div>
          <div className={styles.buttonInvertWrap}>
            <PrimaryButton
              label="Work with us"
              url="/"
              additionalClasses={styles.buttonInvert}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <Image src="/images/about_us.jpg" alt="About Image" fill />
        </div>
      </div>
    </section>
  );
}
