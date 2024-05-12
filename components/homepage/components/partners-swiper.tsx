'use client';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import { useSwiper } from 'swiper/react';
import styles from './partners-swiper.module.scss';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
export default function PartnersSwiper() {
  // const swiper = useSwiper();
  const swiperRef = useRef<SwiperCore>(null);
  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const partners = [
    { link: '#', imageUrl: '/partner_1.svg' },
    { link: '#', imageUrl: '/partner_2.svg' },
    { link: '#', imageUrl: '/partner_3.svg' },
    { link: '#', imageUrl: '/partner_4.svg' },
    { link: '#', imageUrl: '/partner_5.svg' },
    { link: '#', imageUrl: '/partner_6.svg' },
    { link: '#', imageUrl: '/partner_1.svg' },
    { link: '#', imageUrl: '/partner_2.svg' },
  ];
  return (
    <>
      <div className={styles.partnersNavigation}>
        <button
          type="button"
          className={styles.prevButton}
          onClick={handlePrev}
        >
          <Image
            src="/icons/ico_chevron-down.svg"
            alt="Chevron Down"
            width={18}
            height={14}
          />
        </button>
        <h2>Featured Job Providers</h2>
        <button
          type="button"
          className={styles.nextButton}
          onClick={handleNext}
        >
          <Image
            src="/icons/ico_chevron-down.svg"
            alt="Chevron Down"
            width={18}
            height={14}
          />
        </button>
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          onSwiper={(swiper) => {
            // @ts-ignore
            swiperRef.current = swiper;
          }}
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          draggable={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className={styles.partnerBox}>
                <a href={partner.link}>
                  <Image src={partner.imageUrl} alt={partner.link} fill />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
