import React from 'react';
import { Fixtures } from '../components';

const Date = ({ date }) => {
  return <Fixtures date={date} />;
};

Date.getInitialProps = async ({ query }) => {
  const { date } = query;

  return { date };
};

export default Date;
