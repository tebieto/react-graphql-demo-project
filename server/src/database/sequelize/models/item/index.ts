import { DataTypes, Model } from 'sequelize';
import { ItemAttributes } from '../../../../interface/item';
import { sequelize } from '../index';

export interface ItemModel extends Model<ItemAttributes>, ItemAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Item = sequelize.define<ItemModel>('Item', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  created_by: {
    unique: false,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'd',
    },
  },
  title: {
    allowNull: false,
    unique: false,
    type: DataTypes.INTEGER,
  },
});

export default Item;
