import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { PAGES } from '../../utils/constants';
import { RegisterContainer } from './styles';

const Register = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    console.log('here');
  }, []);

  const handleChange = React.useCallback(() => {
    console.log('here');
  }, []);
  return (
    <RegisterContainer>
      <Title title={getPageTitle('Register')} />
      <CustomForm>
        <div className="form">
          <CustomInput
            onChange={handleChange}
            name="full_name"
            placeholder="Enter Full Name"
          />
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
          <CustomInput
            name="confirm"
            onChange={handleChange}
            type="password"
            placeholder="Enter Password Confirmation"
          />
          <div className="form-actions">
            <Link to={PAGES.login}>Login</Link>
            <CustomButton onClick={handleSubmit}>Register</CustomButton>
          </div>
        </div>
      </CustomForm>
    </RegisterContainer>
  );
};

export default Register;
