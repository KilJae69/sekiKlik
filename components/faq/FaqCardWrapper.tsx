import FaqCard from './FaqCard';
import styles from './faq-card-wrapper.module.scss';

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

interface Props {
  category?: {
    id: number;
    categoryTitle: string;
    questions: {
      id: number;
      question: string;
      answer: string;
    }[];
  };
}

const FaqCardWrapper = ({ category }: Props) => {
  const categories = category ? [category] : faqDummyData;
  return (
    <div className={`container-xl ${styles.wrapper}`}>
      {categories.map((category) => (
        <FaqCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default FaqCardWrapper;
