import Link from 'next/link';
import styles from './small-category-card.module.scss';
import Image from 'next/image';

interface Category {
  id: number;
  categoryTitle: string;
}

interface Props {
  categories: Category[];
}

const SmallCategoryCard = ({ categories }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <ul>
        <div>
          <p>Other categories</p>
        </div>
        {categories.map((category) => (
          <li key={category.id}>
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
        ))}
      </ul>
      <button>View All</button>
    </div>
  );
};

export default SmallCategoryCard;
