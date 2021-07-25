import { makeTokens } from '../../entities/token';
import persistToken from './create';
import findToken from './find';
import tokenDb from '../../database/token';

export const addToken = Object.freeze(persistToken({ makeTokens, tokenDb }));

export const getToken = Object.freeze(findToken({ tokenDb }));
