'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FC, useState } from 'react';
import styles from './form.module.scss';

interface RHFTextAreaProps {
  name: string;
  helperText?: string;
  label?: string;
  className?: string;
  icon?: string;
  onIconClick?: () => void;
}

const RHFTextArea: FC<RHFTextAreaProps> = ({
  name,
  icon,
  label,
  className,
  onIconClick,
  ...other
}) => {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div
          className={`${styles.formGroup} ${styles.textAreaGroup} ${className || ''}`}
        >
          {label && (
            <label
              htmlFor={name}
              className={
                field.value !== '' || isFocused ? styles.active : undefined
              }
            >
              {label}
            </label>
          )}
          <textarea
            id={name}
            {...field}
            className={error ? 'error' : ''}
            {...other}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {error ? (
            <span className={styles.errorSpan}>{error.message}</span>
          ) : (
            icon && (
              <span
                className={`${styles.icon} ${styles[icon]}`}
                onClick={onIconClick}
              ></span>
            )
          )}
        </div>
      )}
    />
  );
};

export default RHFTextArea;
