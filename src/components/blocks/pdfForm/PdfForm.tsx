import { useState } from 'react';
import { RadioSection } from '@/components/elements/radioSection/RadioSection';
import { MockUpData } from '@/data/MockUpData';
import './pdfForm.scss';
import { Icon } from '@/components/elements/icon/Icon';
import { useCreatePdf } from '@/hooks/useCreatePdf';

export const PdfForm = () => {
  const [teamCount, setTeamCount] = useState<number>(0);
  const [playstyleType, setPlaystyleType] = useState<number>(3);
  const [playRules, setPlayRules] = useState<number>(0);

  const createPdf = useCreatePdf({ teamCount, playstyleType, playRules });

  const handleCreatePdf = () => {
    createPdf();
    setTeamCount(0);
    setPlaystyleType(3);
    setPlayRules(0);
  };

  console.log('TeamCount', teamCount);
  console.log('PlaystyleType', playstyleType);
  console.log('PlayRules', playRules);

  return (
    <form className="form" onSubmit={createPdf}>
      {MockUpData.sections.map((section) => {
        if (section.type === 'radio') {
          return (
            <RadioSection
              key={section.name}
              name={section.name}
              title={section.title}
              section={section}
              teamCount={teamCount}
              setTeamCount={setTeamCount}
              playstyleType={playstyleType}
              setPlaystyleType={setPlaystyleType}
              playRules={playRules}
              setPlayRules={setPlayRules}
            />
          );
        }
        return null;
      })}
      <button
        type="submit"
        className="form__submit-button"
        disabled={teamCount === 0 || playstyleType === 3}
      >
        Vytvořit PDF <Icon name="file" type="fas" />
      </button>
    </form>
  );
};
