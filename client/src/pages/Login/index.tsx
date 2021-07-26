import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    alert('here');
  }, []);

  const handleChange = React.useCallback(() => {
    alert('here');
  }, []);
  return (
    <LoginContainer>
      <Title title={getPageTitle('Login')} />
      <CustomInput onChange={handleChange} placeholder="Enter Email" />
      <CustomInput
        onChange={handleChange}
        type="password"
        placeholder="Enter Password"
      />
      <CustomButton onClick={handleSubmit}>Login</CustomButton>
    </LoginContainer>
  );
};

export default Login;
