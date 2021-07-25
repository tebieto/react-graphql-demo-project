import { UserAttributes } from '../../interface/user';

const makeUser = () => {
  return function make(info: UserAttributes): UserAttributes {
    const { full_name, email, password } = info;
    if (!full_name) {
      throw new Error('Please enter full name.');
    }
    if (!email) {
      throw new Error('Please enter email.');
    }
    if (password) {
      throw new Error('Please enter password.');
    }
    return Object.freeze({ full_name, email, password });
  };
};

export default makeUser;
