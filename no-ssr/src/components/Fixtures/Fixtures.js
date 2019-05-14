import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import FixtureItem from './FixtureItem';

import GET_FIXTURES from '../../data/get-fixtures.query';
import GET_LIVE from '../../data/get-live.query';

const FixtureList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
font-family: arial,sans-serif;
font-size: 20px; 
`;

const Fixtures = ({ date }) => {
  const title = date ? `Results for ${date}` : 'Live results';
  return (
    <Query query={date ? GET_FIXTURES : GET_LIVE} variables={date && { date }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { fixtures } = data;

        return (
          <>
            <Title>{title}</Title>
            <FixtureList>
              {fixtures.sort((a, b) => a.league_id - b.league_id || a.fixture_id - b.fixture_id).map((fixture, i) => <FixtureItem key={i} fixture={fixture} />)}
            </FixtureList>
          </>
        );
      }}
    </Query>
  );
};

export default Fixtures;
