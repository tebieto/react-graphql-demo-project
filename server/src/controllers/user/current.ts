import { UserAttributes } from '../../interface/user';

interface CurrentUserProps {
  getUser: { (params: UserAttributes): Promise<UserAttributes | void> };
}
export const currentUser = ({ getUser }: CurrentUserProps) => {
  return async (httpRequest: {
    user: UserAttributes;
  }): Promise<UserAttributes | void> => {
    const { user } = httpRequest;
    if (user && user.email) {
      return await getUser({ ...user });
    } else {
      throw new Error('You are not an authenticated user');
    }
  };
};
