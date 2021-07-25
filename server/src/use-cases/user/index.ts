import userDb from '../../database/user';
import { makeUsers } from '../../entities/user';
import { cookieOptions } from '../../functions';
import authenticate from './authenticate';
import persistUser from './create';
import findUser from './find';
import updateUserPassword from './update-password';

export const addUser = Object.freeze(persistUser({ makeUsers, userDb }));

export const getUser = Object.freeze(findUser({ userDb }));

export const authenticateUser = Object.freeze(authenticate(cookieOptions));

export const changeUserPassword = Object.freeze(updateUserPassword({ userDb }));
