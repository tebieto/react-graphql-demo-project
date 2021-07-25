import { UserBaseQuery } from '../../database/user/base';
import { UserAttributes } from '../../interface/user';

interface PersistUser {
  makeUsers: { (info: UserAttributes): UserAttributes };
  userDb: UserBaseQuery;
}

const persistUser = ({ makeUsers, userDb }: PersistUser) => {
  return async function post(
    info: UserAttributes,
  ): Promise<UserAttributes | void> {
    const data = await makeUsers(info);

    if (data) {
      const exists = await userDb.getUserByEmail(data);
      if (exists)
        throw new Error('User with this email already exist, please check.');

      const user = await userDb.persistNewUser(data);

      if (user) {
        return user;
      } else {
        throw new Error('Error creatingting user, please try again.');
      }
    }
  };
};

export default persistUser;
