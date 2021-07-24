import User from '../sequelize/models/user';
import userBase from './base';

const models = { User };
const userDb = userBase({ models });

export default userDb;
