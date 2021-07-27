import { ModelCtor } from 'sequelize/types';
import { ItemAttributes } from '../../interface/item';
import { ItemModel } from '../sequelize/models/item';

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
      const Item = models.Item;
      const created = await Item.create(data);
      const res = await Item.findOne({
        where: { id: created.id },
        include: { all: true },
      });
      if (res) {
        return res;
      }
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
