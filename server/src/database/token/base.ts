import { ModelCtor } from 'sequelize/types';
import { TokenAttributes } from '../../interface/token';
import { TokenModel } from '../sequelize/models/token';

interface TokenBaseAttr {
  models: {
    Token: ModelCtor<TokenModel>;
  };
}

export interface TokenBaseQuery {
  persistNewToken: { (data: TokenAttributes): Promise<TokenAttributes | void> };
  getTokenByEmail: {
    (data: TokenAttributes): Promise<TokenAttributes | null | void>;
  };
  destroyToken: {
    (data: TokenAttributes): Promise<TokenAttributes | null | void>;
  };
}

const tokenBase = ({ models }: TokenBaseAttr): TokenBaseQuery => {
  return Object.freeze({
    persistNewToken,
    getTokenByEmail,
    destroyToken,
  });

  async function persistNewToken(
    data: TokenAttributes,
  ): Promise<TokenAttributes | void> {
    try {
      const Token = models.Token;
      const res = await Token.create(data);
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
  async function getTokenByEmail({
    email,
  }: TokenAttributes): Promise<TokenModel | null | void> {
    try {
      const Token = models.Token;
      const res = await Token.findOne({ where: { email } });
      return res;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
  async function destroyToken({
    email,
  }: TokenAttributes): Promise<TokenModel | null | void> {
    try {
      const Token = models.Token;
      const res = await Token.findOne({ where: { email } });
      if (res) {
        res.destroy();
        return res;
      }
    } catch (e) {
      console.log('Error: ', e);
    }
  }
};
export default tokenBase;
