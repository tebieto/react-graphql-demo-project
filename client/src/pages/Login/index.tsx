import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { PAGES } from '../../utils/constants';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    console.log('here');
  }, []);

  const handleChange = React.useCallback(() => {
    console.log('here');
  }, []);
  return (
    <LoginContainer>
      <Title title={getPageTitle('Login')} />
      <CustomForm>
        <div className="form">
          <CustomInput
            name="email"
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <CustomInput
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
          />
          <div className="form-actions">
            <Link to={PAGES.resetPassword}>Reset Password</Link>
            <Link to={PAGES.register}>Register</Link>
            <CustomButton onClick={handleSubmit}>Login</CustomButton>
          </div>
        </div>
      </CustomForm>
    </LoginContainer>
  );
};

export default Login;
