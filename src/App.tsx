import { DefaultLayout } from '@layouts/defaultLayout/DefaultLayout';
import { FC } from 'react';
import { PdfForm } from '@blocks/pdfForm/PdfForm';

export const App: FC = () => {
  return (
    <DefaultLayout>
      <h1>Hello, world!</h1>
      <PdfForm />
    </DefaultLayout>
  );
};
