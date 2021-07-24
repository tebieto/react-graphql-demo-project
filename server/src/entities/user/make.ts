import { UserAttributes } from '../../interface/user';

const makeUser = () => {
  return function make(info: UserAttributes): UserAttributes {
    if (!info.full_name) {
      throw new Error('Please enter full name.');
    }
    if (!info.email) {
      throw new Error('Please enter email.');
    }
    if (info.password) {
      throw new Error('Please enter password.');
    }
    return Object.freeze({ ...info });
  };
};

export default makeUser;
