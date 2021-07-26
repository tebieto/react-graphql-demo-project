import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { ResetChangePasswordContainer } from './styles';

const ResetChangePassword = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    console.log('here');
  }, []);

  const handleChange = React.useCallback(() => {
    console.log('here');
  }, []);
  return (
    <ResetChangePasswordContainer>
      <Title title={getPageTitle('Change Password')} />
      <CustomForm>
        <div className="form">
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
            <CustomButton onClick={handleSubmit}>Change Password</CustomButton>
          </div>
        </div>
      </CustomForm>
    </ResetChangePasswordContainer>
  );
};

export default ResetChangePassword;
