import { useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import Title from '../../components/Title';
import { REGISTER_USER } from '../../graphql/user/mutation';
import {
  Register as RegisterData,
  RegisterVariables,
} from '../../graphql/user/__generated__/Register';
import { CustomKeyValueObject } from '../../interface';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser } from '../../redux/user/reducer';
import { getPageTitle } from '../../utils';
import { INPUT_KEYS, PAGES } from '../../utils/constants';
import { RegisterContainer } from './styles';

const Register = (): JSX.Element => {
  const defautltFields: RegisterVariables | CustomKeyValueObject = {
    email: '',
    password: '',
    full_name: '',
    confirm: '',
  };
  const [fields, setFields] = React.useState(defautltFields);

  const dispatch = useAppDispatch();

  const [registerUser, { error }] = useMutation<
    RegisterData,
    RegisterVariables
  >(REGISTER_USER, {
    errorPolicy: 'all',
    onCompleted: ({ register }) => {
      if (register && register.id) {
        dispatch(authenticateUser(register.id));
      }
    },
  });

  const handleSubmit = React.useCallback(() => {
    // Validation should be proper, just doing this for speed + backend validation
    const { password, email, full_name, confirm } = fields;
    if (confirm !== password) {
      return alert('Confirm Password');
    }
    const variables = { email, password, full_name } as RegisterVariables;
    registerUser({ variables });
  }, [fields]);

  return (
    <RegisterContainer>
      <Title title={getPageTitle('Register')} />
      <CustomForm error={error}>
        <div className="form">
          <CustomInput
            setFields={setFields}
            fields={fields as CustomKeyValueObject}
            name={INPUT_KEYS.full_name}
            value={fields.full_name}
            placeholder="Enter Full Name"
          />
          <CustomInput
            name="email"
            value={fields.email}
            setFields={setFields}
            fields={fields as CustomKeyValueObject}
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
          <CustomInput
            name={INPUT_KEYS.confirm}
            value={fields.confirm}
            setFields={setFields}
            fields={fields as CustomKeyValueObject}
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

export default React.memo(Register);
