import { createToken, comparePassword, encryptPassword } from '../../functions';
import { addUser, authenticateUser, getUser } from '../../use-cases/user';
import userSignIn from './signin';
import userSignUp from './signup';
const generateToken = createToken();

export const registerUser = Object.freeze(
  userSignUp({ encryptPassword, addUser, generateToken, authenticateUser }),
);

export const loginUser = Object.freeze(
  userSignIn({ getUser, comparePassword, generateToken, authenticateUser }),
);
