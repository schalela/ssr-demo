
import App, { Container } from 'next/app';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import fetch from 'node-fetch';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  text-align: center;
  background-color: #41563D;
  background-image: url('/ssr/static/bg.png');
  background-repeat: repeat;
  background-attachment: fixed;
}

html, body {
  font-family: sans-serif;
  margin: 0;
}

body {
  padding: 48px 0;
}
`;

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const cache = new InMemoryCache({
      cacheRedirects: {
        Query: {
          listEvents: (_, { fixture_id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'Fixture', fixture_id })
        }
      }
    });

    let initialState = {};
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const apollo = new ApolloClient({
      ssrMode: !process.browser,
      link: createHttpLink({
        uri: 'https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-htijskntwzehlai3cbhmt7c24e'
        },
        fetch
      }),
      cache: cache
    });

    try {
      await getDataFromTree(
        <ApolloProvider client={apollo}><Component {...pageProps} /></ApolloProvider>
      );
    } catch (error) {
      // Prevent Apollo Client GraphQL errors from crashing SSR.
      // Handle them in components via the data.error prop:
      // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
      console.error('Error while running `getDataFromTree`', error);
    }

    initialState = apollo.cache.extract();

    return {
      pageProps,
      initialState
    };
  }

  constructor (props) {
    super(props);

    const cache = new InMemoryCache({
      cacheRedirects: {
        Query: {
          listEvents: (_, { fixture_id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'Fixture', fixture_id })
        }
      }
    });

    this.apolloClient = new ApolloClient({
      ssrMode: !process.browser,
      link: createHttpLink({
        uri: 'https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-3pd3ilitrzgcjbefkesrjwve7y'
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
        <GlobalStyle />
        <ApolloProvider client={this.apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp;
