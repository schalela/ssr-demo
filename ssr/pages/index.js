import React from 'react';
import { Fixtures } from '../components';

const Index = ({ date }) => {
  return <Fixtures date={date} />;
};

Index.getInitialProps = async ({ res, query }) => {
  const { date } = query;

  if (res) {
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  }

  return { date };
};

export default Index;
