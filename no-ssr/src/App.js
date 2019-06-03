import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { Fixtures } from './components';
import { createApolloClient } from './data/create-apollo-client';

const App = () => (
  <ApolloProvider client={createApolloClient()}>
    <Fixtures />
  </ApolloProvider>
);

export default App;
