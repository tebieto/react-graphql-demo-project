import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { itemMutation, itemQuery } from './item/resolver';
import { userMutation } from './user/resolver';
export const schema = loadSchemaSync('./**/*.graphqls', {
  // load files and merge them into a single schema object
  loaders: [new GraphQLFileLoader()],
});

export const resolvers = {
  Query: {
    ...itemQuery,
  },
  Mutation: {
    ...userMutation,
    ...itemMutation,
  },
};
