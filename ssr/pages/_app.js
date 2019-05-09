
import App, { Container } from 'next/app';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import fetch from 'node-fetch';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      listEvents: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'Event', id })
    }
  }
});

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let initialState = {};
    const apollo = new ApolloClient({
      ssrMode: !process.browser,
      link: createHttpLink({
        uri: 'https://yqq5lybmwrehzileyuse5yjzve.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-xeycl76qenfufkygpgj5ivem6e'
        },
        fetch
      }),
      cache: cache
    });

    try {
      await getDataFromTree(
        <ApolloProvider client={apollo}><Component /></ApolloProvider>
      );
    } catch (error) {
      // Prevent Apollo Client GraphQL errors from crashing SSR.
      // Handle them in components via the data.error prop:
      // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
      console.error('Error while running `getDataFromTree`', error);
    }

    initialState = apollo.cache.extract();

    return {
      initialState
    };
  }

  constructor (props) {
    super(props);
    this.apolloClient = new ApolloClient({
      ssrMode: !process.browser,
      link: createHttpLink({
        uri: 'https://yqq5lybmwrehzileyuse5yjzve.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-xeycl76qenfufkygpgj5ivem6e'
        },
        fetch
      }),
      cache: cache.restore(props.initialState || {})
    });
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={this.apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp;
