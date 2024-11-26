import { FC, ReactNode } from 'react';
import { Navigation } from '@blocks/navigation/Navigation';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);
