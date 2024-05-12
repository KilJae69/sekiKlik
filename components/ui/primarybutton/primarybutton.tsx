/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styles from './primarybutton.module.scss';

interface PrimaryButtonProps {
  label: string;
  url?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  additionalClasses?: string;
}

export default function PrimaryButton({
  label,
  url,
  onClick,
  isDisabled,
  additionalClasses,
}: PrimaryButtonProps) {
  let buttonClasses = styles.primaryButton;

  if (additionalClasses) {
    buttonClasses += ` ${additionalClasses}`;
  }

  if (url) {
    return (
      <Link href={url} className={buttonClasses}>
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
      {label}
    </button>
  );
}
