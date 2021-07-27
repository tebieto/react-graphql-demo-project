import { TokenAttributes } from '../../interface/token';

const makeToken = () => {
  return function make(info: TokenAttributes): TokenAttributes {
    const { email, token } = info;
    if (!token) {
      throw new Error('Token is required.');
    }
    if (!email) {
      throw new Error('Email is required.');
    }
    return Object.freeze({ email, token });
  };
};

export default makeToken;
