import { useMutation } from '@apollo/client';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { RESET_CHANGE_PASSWORD } from '../../graphql/user/mutation';
import {
  ChangePasswordAfterReset,
  ChangePasswordAfterResetVariables,
} from '../../graphql/user/__generated__/ChangePasswordAfterReset';
import { CustomKeyValueObject } from '../../interface';
import { getPageTitle } from '../../utils';
import { INPUT_KEYS, PAGES } from '../../utils/constants';
import { ResetChangePasswordContainer } from './styles';
import queryString from 'query-string';
import { useHistory } from 'react-router';
import {
  ValidateResetPasswordToken,
  ValidateResetPasswordTokenVariables,
} from '../../graphql/token/__generated__/ValidateResetPasswordToken';
import { VALIDATE_RESET_PASSWORD_TOKEN } from '../../graphql/token/mutation';
import Loader from '../../components/Loader';

const ResetChangePassword = (): JSX.Element => {
  const [allowChange, setAllowChange] = React.useState(false);
  const history = useHistory();
  const params = queryString.parse(history.location.search);
  const { email, token } = params;
  const defautltFields:
    | ChangePasswordAfterResetVariables
    | CustomKeyValueObject = {
    password: '',
    email: '',
    token: '',
    confirm: '',
  };
  const [fields, setFields] = React.useState(defautltFields);

  const [changePasswordAfterReset, { error }] = useMutation<
    ChangePasswordAfterReset,
    ChangePasswordAfterResetVariables
  >(RESET_CHANGE_PASSWORD, {
    errorPolicy: 'all',
    onCompleted: ({ changePasswordAfterReset }) => {
      if (changePasswordAfterReset) {
        alert('Password changed successfully. Proceed to Login');
        history.push(PAGES.login);
      }
    },
  });

  const [validateResetPasswordToken, { loading, error: validationError }] =
    useMutation<
      ValidateResetPasswordToken,
      ValidateResetPasswordTokenVariables
    >(VALIDATE_RESET_PASSWORD_TOKEN, {
      errorPolicy: 'all',
      onCompleted: ({ validateResetPasswordToken }) => {
        if (validateResetPasswordToken && validateResetPasswordToken.email) {
          setAllowChange(true);
        }
      },
    });

  const handleSubmit = React.useCallback(() => {
    // Validation should be proper, just doing this for speed + backend validation
    const { password, email, token, confirm } = fields;
    if (confirm !== password) {
      return alert('Confirm Password');
    }
    const variables = {
      email,
      password,
      token,
    } as ChangePasswordAfterResetVariables;
    changePasswordAfterReset({ variables });
  }, [fields]);

  React.useEffect(() => {
    if (token && email) {
      const variables = {
        email: email as string,
        token: token as string,
      };
      validateResetPasswordToken({
        variables,
      });
      setFields({ ...fields, ...variables });
    }
  }, [email, token]);

  return (
    <ResetChangePasswordContainer>
      <Title title={getPageTitle('Change Password')} />
      {allowChange ? (
        <CustomForm error={error}>
          <div className="form">
            <CustomInput
              name={INPUT_KEYS.password}
              value={fields.password}
              setFields={setFields}
              fields={fields as CustomKeyValueObject}
              type="password"
              placeholder="Enter Password"
            />
            <CustomInput
              name={INPUT_KEYS.confirm}
              value={fields.confirm}
              setFields={setFields}
              fields={fields as CustomKeyValueObject}
              type="password"
              placeholder="Enter Password Confirmation"
            />
            <div className="form-actions">
              <CustomButton onClick={handleSubmit}>
                Change Password
              </CustomButton>
            </div>
          </div>
        </CustomForm>
      ) : loading ? (
        <Loader />
      ) : validationError ? (
        <h2 className="error-message">Invalid Token or Email</h2>
      ) : null}
    </ResetChangePasswordContainer>
  );
};

export default React.memo(ResetChangePassword);
