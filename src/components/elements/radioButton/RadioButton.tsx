import { FC } from 'react';
import './radioButton.scss';

interface RadioButtonProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  label: string;
  isChecked: boolean;
}

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  onChange,
  label,
  isChecked,
}) => {
  return (
    <label
      className={`radio-button ${isChecked ? 'radio-button--selected' : ''}`}
    >
      <input
        type="radio"
        name={name}
        value={String(value)}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="radio-button__input"
      />
      {label}
    </label>
  );
};
