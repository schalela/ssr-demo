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
  padding: 0;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: white;
  margin-bottom: 32px;
`;

const Date = styled.h2`
  font-size: 20px;
  color: white;
  margin-bottom: 48px;
  font-weight: 500;
`;

const Loading = styled.p`
  color: rgba(255,255,255,0.3);
`;

const Fixtures = ({ date }) => {
  return (
    <Query query={date ? GET_FIXTURES : GET_LIVE} variables={date && { date }}>
      {({ data, loading }) => {
        if (loading) {
          return <Loading>Loading...</Loading>;
        }

        const { fixtures } = data;

        return (
          <>
            <Title>{date ? 'Final results' : 'Live results'}</Title>
            <Date>{date}</Date>
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
