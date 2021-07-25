import { ItemBaseQuery } from '../../database/item/base';
import { ItemAttributes } from '../../interface/item';

interface PersistItem {
  makeItems: { (info: ItemAttributes): ItemAttributes };
  itemDb: ItemBaseQuery;
}

const persistItem = ({ makeItems, itemDb }: PersistItem) => {
  return async function post(
    info: ItemAttributes,
  ): Promise<ItemAttributes | void> {
    const data = await makeItems(info);

    if (data) {
      const item = await itemDb.persistNewItem(data);

      if (item) {
        return item;
      } else {
        throw new Error('Error creatingting user, please try again.');
      }
    }
  };
};

export default persistItem;
