
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
  static async getInitialProps ({ Component, ctx }) {
    const apollo = createApolloClient();
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    try {
      await getDataFromTree(
        <ApolloProvider client={apollo}><Component {...pageProps} /></ApolloProvider>
      );
    } catch (error) {
      console.error('Error while running `getDataFromTree`', error);
    }

    return {
      initialState: apollo.cache.extract(),
      pageProps
    };
  }

  constructor (props) {
    super(props);
    this.apolloClient = createApolloClient(props.initialState);
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link rel='shortcut icon' href='/ssr/static/favicon.ico' />
          <meta name='Description' content='SSR version of the demo' />
          <title>SSR Demo</title>
        </Head>
        <GlobalStyle />
        <ApolloProvider client={this.apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default AppWrapper;
