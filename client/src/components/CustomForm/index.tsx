import { ApolloError } from '@apollo/client';
import React, { useEffect } from 'react';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { CustomFormContainer } from './styles';

interface CustomFormProps {
  children: JSX.Element;
  error: ApolloError | undefined;
}

const CustomForm = ({ children, error }: CustomFormProps): JSX.Element => {
  useEffect(() => {
    if (error && error.message) {
      alert(error.message);
    }
  }, [error]);
  return (
    <CustomFormContainer>
      <Title title={getPageTitle('Login')} />
      <div className="form-wrapper">
        <Logo />
        {children}
      </div>
    </CustomFormContainer>
  );
};

export default React.memo(CustomForm);
