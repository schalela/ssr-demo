import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

export const createApolloClient = initialState => new ApolloClient({
  ssrMode: !process.browser,
  link: createHttpLink({
    uri: 'https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-x6wmkzo52nadjkujuvpw2f3cvi'
    },
    fetch
  }),
  cache: (new InMemoryCache()).restore(initialState || {})
});
