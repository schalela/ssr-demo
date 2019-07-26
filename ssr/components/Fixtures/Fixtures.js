import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import FixtureItem from './FixtureItem';

import GET_FIXTURES from '../../data/get-fixtures.query';

const FixtureList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 25px 0;
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

const Fixtures = () => {
  return (
    <Query query={GET_FIXTURES}>
      {({ data, loading }) => {
        if (loading) {
          return <Loading>Loading...</Loading>;
        }

        const { fixtures } = data;

        return (
          <>
            <RenderType>SSR</RenderType>
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
