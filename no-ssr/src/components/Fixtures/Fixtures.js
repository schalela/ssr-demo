import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Loader from 'react-loader-spinner';

import FixtureItem from './FixtureItem';
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

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const RenderType = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  text-shadow: 0 0 3px white;
`;

const Fixtures = ({ date }) => {
  return (
    <Query query={GET_LIVE}>
      {({ data, loading }) => {
        if (loading) {
          return <Loading><Loader
            type='Watch'
            color='white'
            height='100'
            width='100'
          /></Loading>;
        }

        const { fixtures } = data;

        return (
          <>
            <RenderType>NO-SSR</RenderType>
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
