import styles from '@/components/homepage/why-section.module.scss';
import Image from 'next/image';
import IconList from '@/components/ui/iconlist/icon-list';

const DUMYDATA = [
  {
    title: 'Veriefied Job Providers',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
  {
    title: 'No downpayments',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },

  {
    title: 'Training courses',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
  {
    title: 'Premium customer support',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
];

export default function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className={`container-xl ${styles.inner}`}>
        <div className={styles.leftColumn}>
          <div className={styles.titleWrapper}>
            <h2>Why search for a Job with us?</h2>
            <h3>We understand your needs.</h3>
          </div>
          <button type="button">
            <Image
              src="/icons/ico_chevron-down.svg"
              alt="Chevron Down"
              width={18}
              height={14}
            />
          </button>
        </div>

        <div className={styles.rightColumn}>
          <div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
          <div>
            <IconList items={DUMYDATA} />
          </div>
        </div>
      </div>
    </section>
  );
}
