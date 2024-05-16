import Image from 'next/image';
import styles from './user-image.module.scss';

interface UserImageProps {
  src: string;
  additionalClasses?: string;
}

const UserImage = ({ src, additionalClasses }: UserImageProps) => {
  let userImageClasses = styles.imageWrapper;

  if (additionalClasses) userImageClasses += ` ${additionalClasses}`;

  return (
    <div className={userImageClasses}>
      <Image src={src} fill alt="user photo" />
    </div>
  );
};

export default UserImage;
