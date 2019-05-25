import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { Fixtures } from './components';

import parseQueryString from './utils/get-param';

const cache = new InMemoryCache();

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-htijskntwzehlai3cbhmt7c24e'
    }
  }),
  cache
});

function App () {
  const params = parseQueryString();
  const date = params['date'];

  return (
    <ApolloProvider client={client}>
      <Fixtures date={date} />
    </ApolloProvider>
  );
}

export default App;
