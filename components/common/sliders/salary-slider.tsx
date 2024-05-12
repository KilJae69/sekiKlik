import styles from './slider.module.scss';
import Slider from 'react-slider';

interface SalarySliderProps {
  salaryValues: [number, number];
  handleSalaryChange: (val: number | number[]) => void;
}
export default function SalarySlider({
  salaryValues,
  handleSalaryChange,
}: SalarySliderProps) {
  return (
    <>
      <div className={styles.priceBoxes}>
        <div className={styles.priceBox}>
          <span>€ {salaryValues[0]}</span>
        </div>
        <div className={styles.priceBox}>
          <span>€ {salaryValues[1]}</span>
        </div>
      </div>
      <Slider
        className="rhf-slider"
        value={salaryValues}
        onChange={handleSalaryChange}
        min={500}
        max={5000}
      />
      <div className={styles.labelsRow}>
        <p>MIN</p>
        <p>MAX</p>
      </div>
    </>
  );
}
