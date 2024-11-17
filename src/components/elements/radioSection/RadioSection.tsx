import { FC } from 'react';
import { RadioButton } from '@elements/radioButton/RadioButton';
import { Section } from '@/typings/MockUpData';

import './radioSection.scss';

interface RadioSectionProps {
  title: string;
  name: string;
  section: Section;
  setSelectedOptions: (options: (number | string | boolean)[]) => void;
  selectedOptions: (number | string | boolean)[];
}

export const RadioSection: FC<RadioSectionProps> = ({
  title,
  name,
  section,
  setSelectedOptions,
  selectedOptions,
}) => {
  const handleChangeOption = (value: number | boolean) => {
    const newSelectedOptions = selectedOptions.filter(
      (option) => !section.options.some((opt) => opt.value === option)
    );
    newSelectedOptions.push(value);
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <section className="radio-section">
      <h2 className="radio-section__title">
        {title} {section.compulsory && <span className="alert">*</span>}
      </h2>
      <div className="radio-section__options">
        {section.options.map((option) => (
          <RadioButton
            key={option.label}
            name={name}
            value={option.value}
            label={option.label}
            isChecked={selectedOptions.includes(option.value)}
            onChange={handleChangeOption}
          />
        ))}
      </div>
    </section>
  );
};
