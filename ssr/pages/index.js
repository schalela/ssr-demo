import React from 'react';
import { Fixtures } from '../components';

const Index = () => {
  return <Fixtures />;
};

Index.getInitialProps = async ({ res }) => {
  if (res) {
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  }
};

export default Index;
