'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FC, useState } from 'react';
import styles from './form.module.scss';

interface RHFTextFieldProps {
  name: string;
  helperText?: string;
  type?: string;
  label?: string;
  inputMode?:
    | 'text'
    | 'search'
    | 'email'
    | 'tel'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined;
  className?: string;
  icon?: string;
  onIconClick?: () => void;
}

// Component with TypeScript
const RHFTextField: FC<RHFTextFieldProps> = ({
  name,
  icon,
  type = 'text',
  inputMode = 'text',
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
        <div className={`${styles.formGroup} ${className || ''}`}>
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
          <input
            id={name}
            {...field}
            type={type}
            inputMode={inputMode}
            value={type === 'number' && field.value === 0 ? '' : field.value}
            onChange={(event) => {
              let { value } = event.target;
              if (type === 'number') {
                value = value.replace(/\+/g, ''); // remove plus signs for type number
                field.onChange(Number(value));
              } else {
                field.onChange(value);
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={error ? 'error' : ''}
            {...other}
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

export default RHFTextField;
