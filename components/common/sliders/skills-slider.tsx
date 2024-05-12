import Slider from 'react-slider';
import styles from './slider.module.scss';

interface SkillsSliderProps {
  value: number;
  onChange: (val: number) => void;
  label: string;
  min: number;
  max: number;
}

export default function SkillsSlider({
  value,
  onChange,
  label,
  min,
  max,
}: SkillsSliderProps) {
  return (
    <div className={styles.stepsSliderWrapper}>
      <div className={styles.skillsLabelRow}>
        <p>{label}</p>
        <div>
          <span>
            {value}/{max}
          </span>
        </div>
      </div>
      <Slider
        className="rhf-slider steps-slider"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
}
