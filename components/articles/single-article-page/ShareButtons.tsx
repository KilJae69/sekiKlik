import Image from 'next/image';
import styles from './share-buttons.module.scss';

const ShareButtons = () => {
  return (
    <div>
      <p>Share:</p>
      <button>
        <Image
          src="/icons/facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default ShareButtons;
