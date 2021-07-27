import { ItemAttributes } from '../../interface/item';
import { UserAttributes } from '../../interface/user';

interface UserGetItems {
  getItems: { (): Promise<ItemAttributes[] | void> };
}
const userGetItems = ({ getItems }: UserGetItems) => {
  return async function post(httpRequest: {
    user: UserAttributes;
  }): Promise<ItemAttributes[] | void> {
    const { user } = httpRequest;
    if (user) {
      const items = await getItems();

      return items;
    } else {
      throw new Error('You are not an authenticated user');
    }
  };
};

export default userGetItems;
