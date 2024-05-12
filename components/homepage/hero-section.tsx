/* eslint-disable prettier/prettier */
import styles from './hero-section.module.scss';
import Image from 'next/image';
import IconButton from '@/components/ui/iconbutton/iconbutton';
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`container-xl ${styles.inner}`}>
        <h1>Bringing Jobs to You!</h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi
        </p>
        <div className={styles.btnGroup}>
          <IconButton
            label="Job Seekers"
            icon="/icons/ico_search.svg"
            url="/"
          />
          <IconButton
            label="Job Providers"
            icon="/icons/ico_hand.svg"
            url="/"
            additionalClasses={styles.providerBtn}
          />
        </div>
        <Image
          src="/images/hero_image.svg"
          alt="Hero Image"
          width={650}
          height={475}
          priority={true}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
