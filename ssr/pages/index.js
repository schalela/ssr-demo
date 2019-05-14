import React from 'react';
import { Fixtures } from '../components';

const Index = ({ date }) => {
  return <Fixtures date={date} />;
};

Index.getInitialProps = async ({ query }) => {
  const { date } = query;
  return { date };
};

export default Index;
