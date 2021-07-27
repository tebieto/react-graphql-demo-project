import { ItemAttributes } from '../../interface/item';
import { UserAttributes } from '../../interface/user';

interface UserAddItem {
  addItem: { (params: ItemAttributes): Promise<ItemAttributes | void> };
}
const userAddItem = ({ addItem }: UserAddItem) => {
  return async function post(httpRequest: {
    params: ItemAttributes;
    user: UserAttributes;
  }): Promise<ItemAttributes | void> {
    const { params, user } = httpRequest;
    if (user && user.id) {
      const item = await addItem({
        ...params,
        created_by: user.id,
      });

      return item;
    } else {
      throw new Error('You are not an authenticated user');
    }
  };
};

export default userAddItem;
