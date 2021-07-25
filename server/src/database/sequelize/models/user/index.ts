import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { UserAttributes } from '../../../../interface/user';
import { sequelize } from '../index';

export interface UserModel extends Model<UserAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserModel>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
    defaultValue: UUIDV4,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: { type: DataTypes.STRING },
  full_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default User;
