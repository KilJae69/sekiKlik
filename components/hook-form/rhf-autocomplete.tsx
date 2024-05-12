'use client';
import { FC, useState, useEffect, KeyboardEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styles from '@/components/hook-form/form.module.scss';

interface Country {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

interface RHFAutocompleteProps {
  name: string;
  label: string;
  className?: string;
  suggestions: Country[];
  icon?: string;
  onIconClick?: () => void;
}

const RHFAutocomplete: FC<RHFAutocompleteProps> = ({
  name,
  label,
  className,
  suggestions,
  icon,
  onIconClick,
}) => {
  const { control, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Country[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.label.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setFilteredSuggestions(filtered);
      setFocusedIndex(-1); // Reset focus when input changes
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, suggestions]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === 'Enter' && focusedIndex !== -1) {
      e.preventDefault();
      const selectedSuggestion = filteredSuggestions[focusedIndex];
      setInputValue(selectedSuggestion.label);
      setValue(name, selectedSuggestion.code, { shouldValidate: true });
      setShowSuggestions(false);
    }
  };

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
            {...field}
            value={inputValue}
            onChange={(e) => {
              const newValue = e.target.value;
              setInputValue(newValue);
              setValue(name, newValue, { shouldValidate: true });
              setShowSuggestions(newValue.length >= 3);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTimeout(() => setShowSuggestions(false), 100);
              setIsFocused(true);
            }}
            onKeyDown={handleKeyDown}
          />
          {showSuggestions && (
            <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setInputValue(suggestion.label);
                    setValue(name, suggestion.code, { shouldValidate: true });
                    setShowSuggestions(false);
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                  style={{
                    backgroundColor:
                      index === focusedIndex ? 'lightgray' : 'transparent',
                  }}
                >
                  {suggestion.label}
                </li>
              ))}
            </ul>
          )}
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

export default RHFAutocomplete;
