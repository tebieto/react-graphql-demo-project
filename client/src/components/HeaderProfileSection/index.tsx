import React from 'react';
import { HeaderProfileSectionContainer } from './styles';
import avatar from '../../assets/user.png';
import CustomMenu from '../CustomMenu';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../../graphql/user/query';
import { CurrentUser } from '../../graphql/user/__generated__/CurrentUser';

const HeaderProfileSection = (): JSX.Element => {
  const { data } = useQuery<CurrentUser>(CURRENT_USER);
  return (
    <HeaderProfileSectionContainer>
      <img className="auth-user-avatar" src={avatar} alt="" />
      <span className="auth-user-name">
        {(data && data.currentUser && data.currentUser.full_name) || 'Guest'}
      </span>
      <CustomMenu />
    </HeaderProfileSectionContainer>
  );
};

export default HeaderProfileSection;
