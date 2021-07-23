import { ApolloServer } from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';
import { schema, resolvers } from './graphql';

const schemaWithResolver = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer({
  schema: schemaWithResolver,
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.info(`Apollo GraphQL Server listening at ${port}`);
});
