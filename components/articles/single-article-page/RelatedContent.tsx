import React from 'react';
import styles from './related-content.module.scss';
import SectionHeading from './SectionHeading';
import ArticleCard from '../ArticleCard';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

const RelatedContent = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={`container-xl ${styles.innerContent}`}>
        <SectionHeading
          title="Related content"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."
          notLead
        />
        <div className={styles.articleGrid}>
          <ArticleCard
            key={1}
            title={'At vero eos et accusamus et iusto odio'}
            text={
              'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.'
            }
            date={'2 April, 2025'}
          />
          <ArticleCard
            key={1}
            title={'At vero eos et accusamus et iusto odio'}
            text={
              'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.'
            }
            date={'2 April, 2025'}
          />
          <ArticleCard
            key={1}
            title={'At vero eos et accusamus et iusto odio'}
            text={
              'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.'
            }
            date={'2 April, 2025'}
          />
          <ArticleCard
            key={1}
            title={'At vero eos et accusamus et iusto odio'}
            text={
              'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.'
            }
            date={'2 April, 2025'}
          />
        </div>
        <div className={styles.btnWrapper}>
          <PrimaryButton
            label="View All"
            additionalClasses={styles.viewAllBtn}
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
