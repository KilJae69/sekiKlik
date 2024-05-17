import Image from 'next/image';
import styles from './article-card.module.scss';

interface ArticleCardProps {
  src: string;
  date: string;
  title: string;
  text: string;
}

const ArticleCard = ({ src, date, title, text }: ArticleCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={src} fill alt={src} />
      </div>
      <div className={styles.cardWrapper}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
