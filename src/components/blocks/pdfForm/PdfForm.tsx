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

  const showPdf = useCreatePdf({ teamCount, playstyleType, playRules, showInNewTab: true });
  const downloadPdf = useCreatePdf({ teamCount, playstyleType, playRules, showInNewTab: false });

  const handleDownloadPdf = () => {
    downloadPdf();
    setTeamCount(0);
    setPlaystyleType(3);
    setPlayRules(0);
  };
  const handleShowPdf = () => {
    showPdf();
  };

  console.log('TeamCount', teamCount);
  console.log('PlaystyleType', playstyleType);
  console.log('PlayRules', playRules);

  return (
    <form className="form">
      {
        MockUpData.sections.map((section) => {
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
        })
      }
      <div className='form__submit-buttons'>
        <button
          type="submit"
          className="form__submit-button"
          disabled={teamCount === 0 || playstyleType === 3}
          onClick={handleDownloadPdf}
        >
          Stáhnout PDF < Icon name="file" type="fas" />
        </button>
        <button
          type="button"
          className="form__submit-button"
          disabled={teamCount === 0 || playstyleType === 3}
          onClick={handleShowPdf}

        >
          Zobrazit PDF < Icon name="eye" type="fas" />
        </button>
      </div>
    </form >
  );
};
