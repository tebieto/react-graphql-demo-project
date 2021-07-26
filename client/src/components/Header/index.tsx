import React from 'react';
import HeaderProfileSection from '../HeaderProfileSection';
import Logo from '../Logo';
import { HeaderContainer, ToolbarContainer } from './styles';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer color="secondary" elevation={1} position="static">
      <ToolbarContainer>
        <Logo />
        <HeaderProfileSection />
      </ToolbarContainer>
    </HeaderContainer>
  );
};

export default Header;
