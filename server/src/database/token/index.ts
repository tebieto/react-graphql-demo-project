import Token from '../sequelize/models/token';
import tokenBase from './base';

const models = { Token };
const tokenDb = tokenBase({ models });

export default tokenDb;
