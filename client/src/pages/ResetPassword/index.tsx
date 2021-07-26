import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { PAGES } from '../../utils/constants';
import { ResetPasswordContainer } from './styles';

const ResetPassword = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    console.log('here');
  }, []);

  const handleChange = React.useCallback(() => {
    console.log('here');
  }, []);
  return (
    <ResetPasswordContainer>
      <Title title={getPageTitle('Reset Password')} />
      <CustomForm>
        <div className="form">
          <CustomInput
            name="email"
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <div className="form-actions">
            <Link to={PAGES.login}>Back to Login</Link>
            <CustomButton onClick={handleSubmit}>Reset Password</CustomButton>
          </div>
        </div>
      </CustomForm>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
