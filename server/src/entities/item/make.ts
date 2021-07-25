import { ItemAttributes } from '../../interface/item';

const makeItem = () => {
  return function make(info: ItemAttributes): ItemAttributes {
    const { title, created_by } = info;
    if (!title) {
      throw new Error('Please enter item title.');
    }
    if (!created_by) {
      throw new Error('Only authenticated user can add items');
    }
    return Object.freeze({ title, created_by });
  };
};

export default makeItem;
