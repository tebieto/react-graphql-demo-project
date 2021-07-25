import { DataTypes, Model, UUIDV4 } from 'sequelize';
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
    defaultValue: UUIDV4,
  },
  created_by: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  title: {
    allowNull: false,
    unique: false,
    type: DataTypes.INTEGER,
  },
});

export default Item;
