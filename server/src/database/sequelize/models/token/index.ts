import { DataTypes, Model } from 'sequelize';
import { TokenAttributes } from '../../../../interface/token';
import { sequelize } from '../index';

export interface TokenModel extends Model<TokenAttributes>, TokenAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Token = sequelize.define<TokenModel>('User', {
  email: {
    primaryKey: true,
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  token: { type: DataTypes.STRING },
});

export default Token;
