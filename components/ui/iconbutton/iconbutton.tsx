/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styles from './iconbutton.module.scss';
import Image from 'next/image';

interface IconButtonProps {
  label: string;
  url?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  additionalClasses?: string;
  icon?: string;
}

export default function IconButton({
  label,
  url,
  onClick,
  isDisabled,
  additionalClasses,
  icon,
}: IconButtonProps) {
  let buttonClasses = styles.iconButton;

  if (additionalClasses) {
    buttonClasses += ` ${additionalClasses}`;
  }

  if (url) {
    return (
      <Link href={url} className={buttonClasses}>
        {icon && <Image src={icon} alt="Icon" width={24} height={24} />}
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <Image src={icon} alt="Icon" width={24} height={24} />}
      {label}
    </button>
  );
}

