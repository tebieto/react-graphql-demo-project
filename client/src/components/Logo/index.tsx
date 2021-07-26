import React from 'react';
import AppLogo from '../../assets/logo.svg';
import { LogoContainer } from './styles';
import { useHistory } from 'react-router';
import { PAGES } from '../../utils/constants';

const Logo = (): JSX.Element => {
  const history = useHistory();
  return (
    <LogoContainer>
      <div className="wrapper" onClick={() => history.push(PAGES.home)}>
        <img className="logo" src={AppLogo} alt="" />
      </div>
    </LogoContainer>
  );
};

export default Logo;
