import itemDb from '../../database/item';
import { makeItems } from '../../entities/item';
import persistItem from './create';
import findItems from './find';

export const addItem = Object.freeze(persistItem({ makeItems, itemDb }));
export const getItems = Object.freeze(findItems({ itemDb }));
