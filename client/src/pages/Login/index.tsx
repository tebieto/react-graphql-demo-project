import { useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { LOGIN_USER } from '../../graphql/user/mutation';
import {
  LoginUser,
  LoginUserVariables,
} from '../../graphql/user/__generated__/LoginUser';
import { CustomKeyValueObject } from '../../interface';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser } from '../../redux/user/reducer';
import { getPageTitle } from '../../utils';
import { INPUT_KEYS, PAGES } from '../../utils/constants';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  const defautltFields: LoginUserVariables | CustomKeyValueObject = {
    email: '',
    password: '',
  };

  const dispatch = useAppDispatch();

  const [fields, setFields] = React.useState(defautltFields);

  const [loginUser, { error }] = useMutation<LoginUser, LoginUserVariables>(
    LOGIN_USER,
    {
      errorPolicy: 'all',
      onCompleted: ({ login }) => {
        if (login && login.id) {
          dispatch(authenticateUser(login.id));
        }
      },
    },
  );

  const handleSubmit = React.useCallback(() => {
    const variables = fields as LoginUserVariables;
    loginUser({ variables });
  }, [fields]);

  return (
    <LoginContainer>
      <Title title={getPageTitle('Login')} />
      <CustomForm error={error}>
        <div className="form">
          <CustomInput
            name={INPUT_KEYS.email}
            value={fields.email}
            fields={fields as CustomKeyValueObject}
            setFields={setFields}
            placeholder="Enter Email"
          />
          <CustomInput
            name={INPUT_KEYS.password}
            value={fields.password}
            setFields={setFields}
            fields={fields as CustomKeyValueObject}
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

export default React.memo(Login);
