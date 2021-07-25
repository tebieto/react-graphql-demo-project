import { TokenAttributes } from '../../interface/token';

const makeToken = () => {
  return function make(info: TokenAttributes): TokenAttributes {
    const { email, token } = info;
    if (!email) {
      throw new Error('Email is required.');
    }
    if (!token) {
      throw new Error('Token is required.');
    }
    return Object.freeze({ email, token });
  };
};

export default makeToken;
