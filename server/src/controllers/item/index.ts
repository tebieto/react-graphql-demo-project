import { addItem, getItems } from '../../use-cases/item';
import userAddItem from './add';
import userGetItems from './get';

export const addUserItem = Object.freeze(userAddItem({ addItem }));

export const getUserItems = Object.freeze(userGetItems({ getItems }));
