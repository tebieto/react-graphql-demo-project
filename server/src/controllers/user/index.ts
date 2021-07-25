import { bcryptCompare, createToken, encryptPassword } from '../../functions';
import { sendResetPasswordLink } from '../../functions/email';
import { addToken } from '../../use-cases/token';
import { addUser, authenticateUser, getUser } from '../../use-cases/user';
import { currentUser } from './current';
import userResetPassword from './reset';
import userSignIn from './signin';
import userSignUp from './signup';

const comparePassword = bcryptCompare();

const generateToken = createToken();
export const registerUser = Object.freeze(
  userSignUp({ encryptPassword, addUser, generateToken, authenticateUser }),
);

export const loginUser = Object.freeze(
  userSignIn({ getUser, comparePassword, generateToken, authenticateUser }),
);

export const resetUserPassword = Object.freeze(
  userResetPassword({
    getUser,
    generateToken,
    saveToken: addToken,
    sendResetPasswordLink,
  }),
);

export const getCurrentUser = Object.freeze(currentUser({ getUser }));
