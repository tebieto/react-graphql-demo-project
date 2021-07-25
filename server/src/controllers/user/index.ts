import { bcryptCompare, createToken, encryptPassword } from '../../functions';
import { sendResetPasswordLink } from '../../functions/email';
import { addToken, deleteToken, getToken } from '../../use-cases/token';
import {
  addUser,
  authenticateUser,
  changeUserPassword,
  getUser,
} from '../../use-cases/user';
import userChangePasswordOnReset from './change-password-on-reset';
import { currentUser } from './current';
import userResetPassword from './reset';
import userSignIn from './signin';
import userSignUp from './signup';

const comparePassword = bcryptCompare();
const compareToken = bcryptCompare();
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

export const changeUserPasswordAfterReset = Object.freeze(
  userChangePasswordOnReset({
    getToken,
    compareToken,
    encryptPassword,
    changeUserPassword,
    deleteToken,
    authenticateUser,
  }),
);

export const getCurrentUser = Object.freeze(currentUser({ getUser }));
