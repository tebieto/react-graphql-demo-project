import React from 'react';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { CustomFormContainer } from './styles';

interface CustomFormProps {
  children: JSX.Element;
}

const CustomForm = ({ children }: CustomFormProps): JSX.Element => {
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

export default CustomForm;
