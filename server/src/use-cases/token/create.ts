import { TokenBaseQuery } from '../../database/token/base';
import { TokenAttributes } from '../../interface/token';

interface PersistToken {
  makeTokens: { (info: TokenAttributes): TokenAttributes };
  tokenDb: TokenBaseQuery;
}

const persistToken = ({ makeTokens, tokenDb }: PersistToken) => {
  return async function post(
    info: TokenAttributes,
  ): Promise<TokenAttributes | void> {
    const data = await makeTokens(info);

    if (data) {
      const exists = await tokenDb.getTokenByEmail(data);
      if (exists) tokenDb.destroyToken(data);

      const token = await tokenDb.persistNewToken(data);

      if (token) {
        return token;
      } else {
        throw new Error('Error creating token, please try again.');
      }
    }
  };
};

export default persistToken;
