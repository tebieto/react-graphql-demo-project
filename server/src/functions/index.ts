import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
import { UserAttributes } from '../interface/user';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 24,
  httpOnly: true,
  secure: false,
};

export const createToken = () => {
  return async (data: { id: string; email: string }): Promise<string> => {
    return await jsonwebtoken.sign(data, JWT_SECRET, {
      expiresIn: '1d',
    });
  };
};

export const decodeToken = async (
  token: string,
): Promise<JwtPayload | UserAttributes> => {
  return await (jsonwebtoken.verify(token, JWT_SECRET) as UserAttributes);
};

export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return (await password) ? bcrypt.hash(password, salt) : '';
};

export const bcryptCompare = () => {
  return async (
    plainString: string,
    encryptedString: string,
  ): Promise<boolean> => {
    return await bcrypt.compare(plainString, encryptedString);
  };
};
