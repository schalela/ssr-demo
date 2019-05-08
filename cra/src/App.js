import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import EventList from './components/event-list';
import Event from './components/event';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      listEvents: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'Event', id })
    }
  }
});

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://yqq5lybmwrehzileyuse5yjzve.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-xeycl76qenfufkygpgj5ivem6e'
    }
  }),
  cache
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={EventList} />
        <Route exact path='/event/:id' render={({ match: { params: { id } } }) => {
          return <Event id={id} />;
        }} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
