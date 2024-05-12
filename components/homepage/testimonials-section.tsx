import styles from './testimonials-section.module.scss';
import Image from 'next/image';
import IconButton from '@/components/ui/iconbutton/iconbutton';

type Testimonial = {
  id: number;
  imageSrc: string;
  testimonialText: string;
  authorName: string;
  authorRole: string;
};

// Dummy data array
const dummyData: Testimonial[] = [
  {
    id: 1,
    imageSrc: '/images/testimonial.jpg',
    testimonialText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    authorName: 'Jenny Hong',
    authorRole: 'Cook at Long Horn Beach, Island bol',
  },
  {
    id: 2,
    imageSrc: '/images/testimonial.jpg',
    testimonialText:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    authorName: 'Mark Spencer',
    authorRole: 'Developer at Tech Solutions',
  },
  {
    id: 3,
    imageSrc: '/images/testimonial.jpg',
    testimonialText:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    authorName: 'Sara Connor',
    authorRole: 'Manager at Example Corp',
  },
  {
    id: 4,
    imageSrc: '/images/testimonial.jpg',
    testimonialText:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    authorName: 'Sara Connor',
    authorRole: 'Manager at Example Corp',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`container-xl ${styles.inner}`}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Jobs well done</h2>
          <h3 className={styles.subtitle}>Member’s Experiences</h3>
        </div>
        <div className={styles.testimonialsWrapper}>
          {dummyData.map((testimonial) => (
            <div key={testimonial.id} className={styles.singleBox}>
              <div className={styles.imageWrapper}>
                <Image
                  src={testimonial.imageSrc}
                  alt="testimonial"
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.contentWrapper}>
                <p className="body-text">{testimonial.testimonialText}</p>
                <h3>{testimonial.authorName}</h3>
                <h4>{testimonial.authorRole}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <IconButton label="View more" />
        </div>
      </div>
    </section>
  );
}
