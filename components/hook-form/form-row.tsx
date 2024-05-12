import React from 'react';
import styles from './form.module.scss';

interface FormRowProps {
  children: React.ReactNode;
  additionalClassName?: string;
}

export default function FormRow({
  children,
  additionalClassName,
}: FormRowProps) {
  const className = `${styles.formRow} ${additionalClassName || ''}`.trim();

  return <div className={className}>{children}</div>;
}
