import Link from 'next/link';
import styles from './faq-card.module.scss';
import Image from 'next/image';

interface Props {
  category: {
    id: number;
    categoryTitle: string;
    questions: {
      id: number;
      question: string;
      answer: string;
    }[];
  };
}

const FaqCard = ({ category }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <ul>
        <li>
          <Link href={`/faq/${category.id}`}>
            <p>{category.categoryTitle}</p>
            <Image
              src="/icons/ico_chevron_right_circle.svg"
              width={23}
              height={23}
              alt="chevron icon"
            />
          </Link>
        </li>
        {category.questions.map((question) => (
          <li key={question.id}>
            <Link href={`/faq/${category.id}`}>
              <p>{question.question}</p>
              <Image
                src="/icons/ico_chevron_right_circle.svg"
                width={23}
                height={23}
                alt="chevron icon"
              />
            </Link>
          </li>
        ))}
      </ul>

      <button>View All</button>
    </div>
  );
};

export default FaqCard;
