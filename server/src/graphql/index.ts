import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { itemMutation, itemQuery } from './item/resolver';
import { tokenMutation } from './token/resover';
import { userMutation, userQuery } from './user/resolver';
export const schema = loadSchemaSync('./**/*.graphqls', {
  // load files and merge them into a single schema object
  loaders: [new GraphQLFileLoader()],
});

export const resolvers = {
  Query: {
    ...itemQuery,
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
    ...itemMutation,
    ...tokenMutation,
  },
};
