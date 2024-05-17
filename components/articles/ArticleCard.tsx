import Image from 'next/image';
import styles from './article-card.module.scss';
import Link from 'next/link';

interface ArticleCardProps {
  src?: string;
  date: string;
  title: string;
  text: string;
  isSmall?: boolean;
}

const ArticleCard = ({ src, date, title, text, isSmall }: ArticleCardProps) => {
  return (
    <div
      className={`${styles.wrapper} ${isSmall && styles.small} ${!src && styles.noImage}`}
    >
      <Link href={`/articles/${title}`}>
        {src ? (
          <div className={styles.imageWrapper}>
            <Image src={src} fill alt={title} />
          </div>
        ) : null}
        <div className={styles.cardWrapper}>
          <span>{date}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
