import { addUserItem, getUserItems } from '../../controllers/item';
import { ItemAttributes } from '../../interface/item';
import { UserAttributes } from '../../interface/user';

export const itemQuery = {
  async getItems(
    _: void,
    __: void,
    { user }: { user: UserAttributes },
  ): Promise<ItemAttributes[] | void> {
    const httpRequest = {
      user,
    };
    return await getUserItems(httpRequest);
  },
};

export const itemMutation = {
  async addItem(
    _: void,
    { title }: ItemAttributes,
    { user }: { user: UserAttributes },
  ): Promise<ItemAttributes | void> {
    const httpRequest = {
      user,
      params: { title },
    };
    return await addUserItem(httpRequest);
  },
};
