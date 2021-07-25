import resetPasswordTokenValidate from './validate';
import { getToken } from '../../use-cases/token';
import { bcryptCompare } from '../../functions';

const compareToken = bcryptCompare();

export const validateResetUserPasswordToken = Object.freeze(
  resetPasswordTokenValidate({ getToken, compareToken }),
);
