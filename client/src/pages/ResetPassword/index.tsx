import { useMutation } from '@apollo/client';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { RESET_PASSWORD } from '../../graphql/user/mutation';
import {
  ResetPassword as ResetPasswordData,
  ResetPasswordVariables,
} from '../../graphql/user/__generated__/ResetPassword';
import { CustomKeyValueObject } from '../../interface';
import { getPageTitle } from '../../utils';
import { INPUT_KEYS, PAGES } from '../../utils/constants';
import { ResetPasswordContainer } from './styles';

const ResetPassword = (): JSX.Element => {
  const defautltFields: ResetPasswordVariables | CustomKeyValueObject = {
    email: '',
  };
  const [fields, setFields] = React.useState(defautltFields);
  const history = useHistory();
  const [resetPassword, { error }] = useMutation<
    ResetPasswordData,
    ResetPasswordVariables
  >(RESET_PASSWORD, {
    errorPolicy: 'all',
    onCompleted: ({ resetPassword }) => {
      if (resetPassword) {
        alert(`${resetPassword}. Check your email or Server Logs for link`);
        history.push(PAGES.login);
      }
    },
  });

  const handleSubmit = React.useCallback(() => {
    const variables = fields as ResetPasswordVariables;
    resetPassword({ variables });
  }, [fields]);

  return (
    <ResetPasswordContainer>
      <Title title={getPageTitle('Reset Password')} />
      <CustomForm error={error}>
        <div className="form">
          <CustomInput
            name={INPUT_KEYS.email}
            setFields={setFields}
            fields={fields as CustomKeyValueObject}
            placeholder="Enter Email"
            value={fields.email}
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

export default React.memo(ResetPassword);
