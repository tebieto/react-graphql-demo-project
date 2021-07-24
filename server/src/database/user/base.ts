import { ModelCtor } from 'sequelize/types';
import { UserAttributes } from '../../interface/user';
import { UserModel } from '../sequelize/models/user';

interface UserBaseAttr {
  models: {
    User: ModelCtor<UserModel>;
  };
}

export interface UserBaseQuery {
  persistNewUser: { (data: UserAttributes): Promise<UserAttributes | void> };
  getUserByEmail: { (data: UserAttributes): Promise<UserModel | null | void> };
}

const userBase = ({ models }: UserBaseAttr): UserBaseQuery => {
  return Object.freeze({
    persistNewUser,
    getUserByEmail,
  });

  async function persistNewUser(
    data: UserAttributes,
  ): Promise<UserAttributes | void> {
    try {
      const User = models.User;
      const res = await User.create(data);
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
  async function getUserByEmail({
    email,
  }: UserAttributes): Promise<UserModel | null | void> {
    try {
      const User = models.User;
      const res = await User.findOne({ where: { email } });
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
};
export default userBase;
