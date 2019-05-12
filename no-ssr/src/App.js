import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { Fixtures } from './components';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      listEvents: (_, { fixture_id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'Fixture', fixture_id })
    }
  }
});

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-3pd3ilitrzgcjbefkesrjwve7y'
    }
  }),
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fixtures />
    </ApolloProvider>
  );
}

export default App;
