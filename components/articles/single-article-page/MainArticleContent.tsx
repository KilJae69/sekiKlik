import OnlyIconButton from '@/components/ui/only-icon-button/OnlyIconButton';
import SectionHeading from './SectionHeading';
import styles from './main-article-content.module.scss';

const shareConstants = [
  {
    icon: '/icons/ico_envelope.svg',
  },
  {
    icon: '/icons/ico_face.svg',
  },
  {
    icon: '/icons/ico_x.svg',
  },
  {
    icon: '/icons/ico_linkedin.svg',
  },
];

const MainArticleContent = () => {
  return (
    <section className={styles.sectionWrapper}>
      <SectionHeading
        title="Simple article title view headline goes here"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium volup atum deleniti atque corrupti quos dolores
        et quas molestias excepturi"
        date="2 April, 3025."
      />
      <div className={styles.shareButtons}>
        <p>Share:</p>
        {shareConstants.map((share, index) => (
          <OnlyIconButton key={index} icon={share.icon} />
        ))}
      </div>

      <article>
        <h2>Glopont (H2)</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium volup atum deleniti atque corrupti quos dolores
          et quas molestias excepturi{' '}
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffere Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, atque. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          saepe voluptates voluptatem molestias culpa exercitationem soluta
          pariatur cum similique.
        </p>
      </article>
      <article>
        <h3>Glopont (H3)</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium volup atum deleniti atque corrupti quos dolores
          et quas molestias excepturi{' '}
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffere Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, atque. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          saepe voluptates voluptatem molestias culpa exercitationem soluta
          pariatur cum similique.
        </p>
      </article>
      <article>
        <h4>Glopont (H4)</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium volup atum deleniti atque corrupti quos dolores
          et quas molestias excepturi{' '}
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffere Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, atque. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          saepe voluptates voluptatem molestias culpa exercitationem soluta
          pariatur cum similique.
        </p>
      </article>
    </section>
  );
};

export default MainArticleContent;
