import { ApolloServer } from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';
import { schema, resolvers } from './graphql';
import { syncSequelize } from './database/sequelize/models';

const schemaWithResolver = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer({
  schema: schemaWithResolver,
});

syncSequelize();

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.info(`Apollo GraphQL Server listening at ${port}`);
});
