import styles from '@/components/homepage/left-right-image-section.module.scss';
import Image from 'next/image';
import IconList from '@/components/ui/iconlist/icon-list';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

interface LeftRightImageSectionData {
  title: string;
  imageUrl: string;
  paragraphs: string[];
  items: {
    title: string;
    text: string;
  }[];
  buttonLabel: string;
  buttonUrl: string;
  reverseColumns?: boolean;
}

interface LeftRightImageSectionProps {
  data: LeftRightImageSectionData;
}

const LeftRightImageSection: React.FC<LeftRightImageSectionProps> = ({
  data,
}) => {
  const {
    title,
    imageUrl,
    paragraphs,
    items,
    buttonLabel,
    buttonUrl,
    reverseColumns = false,
  } = data;

  return (
    <section
      className={`${styles.leftRightSection} ${reverseColumns && styles.jobProvider}`}
    >
      <div className={`container-xl ${styles.inner}`}>
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt="Hero Image" fill />
        </div>
        <div className={styles.contentWrapper}>
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="body-text">
              {paragraph}
            </p>
          ))}
          <IconList items={items} />
          <div className={styles.buttonWrap}>
            <PrimaryButton label={buttonLabel} url={buttonUrl} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftRightImageSection;
