import { FC, useEffect } from 'react';
import { RadioButton } from '@elements/radioButton/RadioButton';
import { Section } from '@/typings/MockUpData';

import './radioSection.scss';
import { Icon } from '../icon/Icon';

interface RadioSectionProps {
  title: string;
  name: string;
  section: Section;
  teamCount: number;
  setTeamCount: (value: number) => void;
  playstyleType: number;
  setPlaystyleType: (value: number) => void;
  playRules: number | null;
  setPlayRules: (value: number) => void;
}

export const RadioSection: FC<RadioSectionProps> = ({
  title,
  name,
  section,
  teamCount,
  setTeamCount,
  playstyleType,
  setPlaystyleType,
  playRules,
  setPlayRules,
}) => {
  const handleChangeOption = (value: number) => {
    if (name === 'teams') {
      setTeamCount(value);
    } else if (name === 'sets') {
      setPlaystyleType(value);
    } else if (name === 'play') {
      setPlayRules(value);
    }
  };

  const isChecked = (value: number) => {
    if (name === 'teams') {
      return teamCount === value;
    } else if (name === 'sets') {
      return playstyleType === value;
    } else if (name === 'play') {
      return playRules === value;
    }
    return false;
  };

  useEffect(() => {
    setPlayRules(0);
  }, [playstyleType]);

  return (
    <section className="radio-section">
      <div className="radio-section__top">
        <h2 className="radio-section__title">
          {title} {section.compulsory && <span className="alert">*</span>}
        </h2>
        {section.name === 'play' && (
          <abbr title="Zrušit výběr">
            <button
              type="button"
              className="radio-section__remove-button"
              onClick={() => setPlayRules(0)}
            >
              <Icon name="delete-left" type="fas" />
            </button>
          </abbr>
        )}
      </div>
      <div className="radio-section__options">
        {section.options.map((option) => {
          if (section.name === 'play') {
            if (playstyleType === 0 && option.type === 'play') {
              return (
                <RadioButton
                  key={option.label}
                  name={name}
                  value={option.value}
                  label={option.label}
                  isChecked={isChecked(option.value)}
                  onChange={handleChangeOption}
                />
              );
            } else if (playstyleType === 1 && option.type === 'win') {
              return (
                <RadioButton
                  key={option.label}
                  name={name}
                  value={option.value}
                  label={option.label}
                  isChecked={isChecked(option.value)}
                  onChange={handleChangeOption}
                />
              );
            } else if (playstyleType !== 0 && playstyleType !== 1) {
              return (
                <RadioButton
                  key={option.label}
                  name={name}
                  value={option.value}
                  label={option.label}
                  isChecked={isChecked(option.value)}
                  onChange={handleChangeOption}
                />
              );
            }
          } else {
            return (
              <RadioButton
                key={option.label}
                name={name}
                value={option.value}
                label={option.label}
                isChecked={isChecked(option.value)}
                onChange={handleChangeOption}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};
