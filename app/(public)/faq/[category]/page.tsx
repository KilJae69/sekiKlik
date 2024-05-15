/* eslint-disable prettier/prettier */
import styles from './page.module.scss';
import FaqCardWrapper from '@/components/faq/FaqCardWrapper';
import FaqHeading from '@/components/faq/FaqHeading';
import SmallCategoryCard from '@/components/faq/SmallCategoryCard';

const faqDummyData = [
  {
    id: 1,
    categoryTitle: 'Membership questions',
    questions: [
      {
        id: 1,
        question: 'What is JobKlik Global?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 2,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 3,
        question: 'How do I get my password?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 4,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
    ],
  },
  {
    id: 2,
    categoryTitle: 'Job providers',
    questions: [
      {
        id: 1,
        question: 'What is JobKlik Global?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 2,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 3,
        question: 'How do I get my password?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 4,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
    ],
  },
  {
    id: 3,
    categoryTitle: 'Job seekers',
    questions: [
      {
        id: 1,
        question: 'What is JobKlik Global?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 2,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 3,
        question: 'How do I get my password?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 4,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
    ],
  },
  {
    id: 4,
    categoryTitle: 'Chat and messages',
    questions: [
      {
        id: 1,
        question: 'What is JobKlik Global?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 2,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 3,
        question: 'How do I get my password?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
      {
        id: 4,
        question: 'How do I register?',
        answer:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volup atum deleniti atque corrupti quos dolores et quas molestias excepturi',
      },
    ],
  },
];

export default function FaqCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const selectedCategory = faqDummyData.find(
    (cat) => cat.id === Number(category),
  );
  const otherCategories = faqDummyData.filter(
    (cat) => cat.id !== Number(category),
  );

  return (
    <>
      <FaqHeading />
      <div className={` container-xl ${styles.wrapper}`}>
        <FaqCardWrapper category={selectedCategory} />
        <SmallCategoryCard categories={otherCategories} />
      </div>
    </>
  );
}

