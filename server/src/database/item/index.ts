import Item from '../sequelize/models/item';
import itemBase from './base';

const models = { Item };
const itemDb = itemBase({ models });

export default itemDb;
