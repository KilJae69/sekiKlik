import { Controller, useFormContext } from 'react-hook-form';
import styles from '@/components/hook-form/form.module.scss';

interface RHFCheckboxProps {
  name: string;
  label: React.ReactNode;
  helperText?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void;
  [key: string]: any; // for additional props spread
  className?: string;
}

export function RHFCheckbox({
  name,
  label,
  helperText,
  onChange,
  className,
  ...other
}: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={`${styles.checkGroup} ${className || ''}`}>
          <label>
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              onChange={(e) => onChange(e.target.checked)}
              {...other}
            />
            {label}
          </label>
          {error ? (
            <span className={styles.errorSpan}>{error.message}</span>
          ) : (
            helperText && <span className="helper-text">{helperText}</span>
          )}
        </div>
      )}
    />
  );
}
