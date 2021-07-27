import { UserBaseQuery } from '../../database/user/base';
import { UserAttributes } from '../../interface/user';

interface UpdateUserPassword {
  userDb: UserBaseQuery;
}

const updateUserPassword = ({ userDb }: UpdateUserPassword) => {
  return async function get(
    info: UserAttributes,
  ): Promise<UserAttributes | void> {
    const { password, email } = info;
    if (email && password) {
      const user = await userDb.updateUserPassword(info);
      if (user) {
        return user;
      } else {
        throw new Error('User not found..');
      }
    } else {
      throw new Error('Invalid email or password');
    }
  };
};

export default updateUserPassword;
