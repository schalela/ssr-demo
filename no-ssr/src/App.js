import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { LeagueList } from '@sam/ssr-demo-app';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      listEvents: (_, { league_id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'League', league_id })
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

function App () {
  const [initialLeague, setInitialLeague] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialLeague]);

  function handleScroll () {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setInitialLeague(initialLeague + 15);
  }

  return (
    <ApolloProvider client={client}>
      <LeagueList initialLeague={initialLeague} />
    </ApolloProvider>
  );
}

export default App;
