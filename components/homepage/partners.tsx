import PartnersSwiper from '@/components/homepage/components/partners-swiper';
import styles from './partners-section.module.scss';
export default function PartnersSection() {
  return (
    <section className={`container-xl ${styles.partnerSection}`}>
      <PartnersSwiper />
    </section>
  );
}
