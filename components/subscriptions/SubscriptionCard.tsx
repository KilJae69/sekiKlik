import Image from 'next/image';
import PrimaryButton from '../ui/primarybutton/primarybutton';
import styles from './SubscriptionCard.module.scss';

interface SubscriptionCardProps {
  buttonLabel: string;
  cardData: {
    id: number;
    title: string;
    badgeColor: string;
    subtitle: string;
    features: {
      id: number;
      included: boolean;
      text: string;
    }[];
    price: string;
    ads: string;
    isActivePlan: boolean;
  };
}

export default function SubscriptionCard({
  cardData,
  buttonLabel,
}: SubscriptionCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.badge} ${styles[cardData.badgeColor]}`}>
        <span>{cardData.ads}</span>
      </div>
      <h3>{cardData.title}</h3>
      <p className={styles.subtitle}>{cardData.subtitle}</p>
      <ul className={styles.featuresList}>
        {/* Features */}
        {cardData.features.map((feature) => (
          <li className={styles.feature} key={feature.id}>
            <Image
              src={
                feature.included
                  ? '/icons/ico_checkmark-small.svg'
                  : '/icons/ico_xmark.svg'
              }
              width={9}
              height={9}
              alt={feature.included ? 'checkmark icon' : 'xmark icon'}
            />
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.pricingPanel}>
        <p>{cardData.price}&euro;</p>
        <span>/monthly</span>
      </div>
      <PrimaryButton
        additionalClasses={`${styles.btn} ${cardData.isActivePlan && styles['btn--active']}`}
        label={buttonLabel}
      />
      <span>Expires in #days</span>
    </div>
  );
}
