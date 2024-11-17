import { FC } from 'react';
import Logo from '@assets/logo.png';
import './navigation.scss';

export const Navigation: FC = () => {
  return (
    <nav className="nav">
      <img className="nav__image" src={Logo} alt="Beach logo" />
    </nav>
  );
};
