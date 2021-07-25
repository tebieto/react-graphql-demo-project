import { ItemBaseQuery } from '../../database/item/base';
import { ItemAttributes } from '../../interface/item';

interface FindItems {
  itemDb: ItemBaseQuery;
}

const findItems = ({ itemDb }: FindItems) => {
  return async function get(): Promise<ItemAttributes[] | void> {
    const items = await itemDb.getAllItems();
    if (items) {
      return items;
    }
  };
};

export default findItems;
