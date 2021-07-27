import { UserBaseQuery } from '../../database/user/base';
import { UserAttributes } from '../../interface/user';

interface FindUser {
  userDb: UserBaseQuery;
}

const findUser = ({ userDb }: FindUser) => {
  return async function get(
    info: UserAttributes,
  ): Promise<UserAttributes | void> {
    const { email } = info;
    if (email) {
      const user = await userDb.getUserByEmail(info);
      if (user) {
        return user;
      } else {
        throw new Error('No user found for this email');
      }
    } else {
      throw new Error('Invalid Session');
    }
  };
};

export default findUser;
