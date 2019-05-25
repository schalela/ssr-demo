import React from 'react';
import { Fixtures } from '../components';

const Date = ({ date }) => {
  return <Fixtures date={date} />;
};

Date.getInitialProps = async ({ res, query }) => {
  const { date } = query;
  if (res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  return { date };
};

export default Date;
