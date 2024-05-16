import PrimaryButton from '@/components/ui/primarybutton/primarybutton';
import Image from 'next/image';
import styles from './purchase-success.module.scss';

const PurchaseSuccess = () => {
  return (
    <div className={`container-xl ${styles.wrapper}`}>
      <h1>Thank you for your payment!</h1>
      <p>
        Take advantege of our supreme aplication..At vero eos et accusamus et
        iusto odio dignissimos ducimus. Vero eos et accusamus et iusto odio
        dignissimos.
      </p>
      <PrimaryButton
        additionalClasses={styles.btn}
        label="Start using JobKlik!"
      />
      <Image
        src="/images/thank_you_purchase.svg"
        width={497}
        height={506}
        priority
        alt="Purchase confirm image"
      />
    </div>
  );
};

export default PurchaseSuccess;
