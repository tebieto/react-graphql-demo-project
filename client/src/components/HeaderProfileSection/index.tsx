import React from 'react';
import { HeaderProfileSectionContainer } from './styles';
import avatar from '../../assets/user.png';
import CustomMenu from '../CustomMenu';

const HeaderProfileSection = (): JSX.Element => {
  return (
    <HeaderProfileSectionContainer>
      <img className="auth-user-avatar" src={avatar} alt="" />
      <span className="auth-user-name">John Doe</span>
      <CustomMenu />
    </HeaderProfileSectionContainer>
  );
};

export default HeaderProfileSection;
