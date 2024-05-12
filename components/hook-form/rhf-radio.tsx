import { Controller, useFormContext } from 'react-hook-form';
import styles from '@/components/hook-form/form.module.scss';

interface RHFRadioProps {
  name: string;
  value: any;
  label: React.ReactNode;
  helperText?: string;
  className?: string;
}

export function RHFRadio({
  name,
  value,
  label,
  className,
  ...other
}: RHFRadioProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={`${styles.radioGroup} ${className || ''}`}>
          <label>
            <input
              type="radio"
              {...field}
              value={value}
              checked={field.value === value}
              {...other}
            />
            {label}
          </label>
        </div>
      )}
    />
  );
}
