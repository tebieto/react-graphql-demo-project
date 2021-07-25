import { ModelCtor } from 'sequelize/types';
import { ItemAttributes } from '../../interface/item';
import Item, { ItemModel } from '../sequelize/models/item';

interface ItemBaseAttr {
  models: {
    Item: ModelCtor<ItemModel>;
  };
}

export interface ItemBaseQuery {
  persistNewItem: { (data: ItemAttributes): Promise<ItemAttributes | void> };
  getAllItems: { (): Promise<ItemModel[] | null | void> };
}

const itemBase = ({ models }: ItemBaseAttr): ItemBaseQuery => {
  return Object.freeze({
    persistNewItem,
    getAllItems,
  });

  async function persistNewItem(
    data: ItemAttributes,
  ): Promise<ItemAttributes | void> {
    try {
      const User = models.Item;
      const res = await User.create(data);
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
  async function getAllItems(): Promise<ItemModel[] | null | void> {
    try {
      const Item = models.Item;
      const res = await Item.findAll({ include: { all: true } });
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
};
export default itemBase;
