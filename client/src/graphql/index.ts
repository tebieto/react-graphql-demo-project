import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {},
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
