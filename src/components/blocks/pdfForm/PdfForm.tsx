import { useState } from 'react';
import { RadioSection } from '@/components/elements/radioSection/RadioSection';
import { MockUpData } from '@/data/MockUpData';
import './pdfForm.scss';
import { Icon } from '@/components/elements/icon/Icon';

export const PdfForm = () => {
  const [selectedOptions, setSelectedOptions] = useState<
    (number | string | boolean)[]
  >([]);

  console.log(selectedOptions);

  return (
    <form className="form">
      {MockUpData.sections.map((section) => {
        if (section.type === 'radio') {
          return (
            <RadioSection
              key={section.name}
              name={section.name}
              title={section.title}
              section={section}
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          );
        }

        if (section.type === 'number') {
          return (
            <input
              key={section.name}
              type="number"
              name={section.name}
              placeholder={section.title}
              className="form__input"
            />
          );
        }

        if (section.type === 'text') {
          return (
            <textarea
              key={section.name}
              name={section.name}
              placeholder={section.title}
              className="form__textarea"
            />
          );
        }

        return null;
      })}
      <button className="form__submit-button">
        Vytvořit PDF <Icon name="file" type="fas" />
      </button>
    </form>
  );
};
