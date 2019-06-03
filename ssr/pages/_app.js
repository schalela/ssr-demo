
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';

import { createGlobalStyle } from 'styled-components';
import { createApolloClient } from '../data/create-apollo-client';

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
`;

class AppWrapper extends App {
  static async getInitialProps ({ Component }) {
    const apollo = createApolloClient();

    try {
      await getDataFromTree(
        <ApolloProvider client={apollo}><Component /></ApolloProvider>
      );
    } catch (error) {
      console.error('Error while running `getDataFromTree`', error);
    }

    return {
      initialState: apollo.cache.extract()
    };
  }

  constructor (props) {
    super(props);
    this.apolloClient = createApolloClient(props.initialState);
  }

  render () {
    const { Component } = this.props;

    return (
      <Container>
        <Head>
          <link rel='shortcut icon' href='/ssr/static/favicon.ico' />
          <title>SSR Demo</title>
        </Head>
        <GlobalStyle />
        <ApolloProvider client={this.apolloClient}>
          <Component />
        </ApolloProvider>
      </Container>
    );
  }
}

export default AppWrapper;
