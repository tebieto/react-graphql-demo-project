import userDb from '../../database/user';
import { makeUsers } from '../../entities/user';
import { cookieOptions } from '../../functions';
import authenticate from './authenticate';
import persistUser from './create';
import findUser from './find';

export const addUser = Object.freeze(persistUser({ makeUsers, userDb }));

export const getUser = Object.freeze(findUser({ userDb }));

export const authenticateUser = Object.freeze(authenticate(cookieOptions));
