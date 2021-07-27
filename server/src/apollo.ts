import { ApolloServer } from 'apollo-server-express';
import { Response } from 'express';

import { addResolversToSchema } from '@graphql-tools/schema';
import { schema, resolvers } from './graphql';
import { UserAttributes } from './interface/user';

const schemaWithResolver = addResolversToSchema({ schema, resolvers });
const apolloServer = new ApolloServer({
  schema: schemaWithResolver,
  /**
   *  Pass authenticated user
   * and res object to resolver
   */
  context: ({
    req,
    res,
  }: {
    res: Response;
    req: {
      user: UserAttributes;
    };
  }) => {
    const user = req.user;
    return { user, res };
  },
});

export default apolloServer;
