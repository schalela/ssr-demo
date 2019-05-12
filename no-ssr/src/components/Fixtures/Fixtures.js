import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FixtureItem from './FixtureItem';

const GET_FIXTURES = gql`
  query fixtures($date: String!) {
    fixtures(date: $date) {
      fixture_id
      league_id
      homeTeam
      awayTeam
      statusShort
      goalsHomeTeam
      goalsAwayTeam
      halftime_score
      final_score
      penalty
    }
  }
`;

const FixtureList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

const Fixtures = () => {
  return (
    <Query query={GET_FIXTURES} variables={{ date: '2019-04-21' }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { fixtures } = data;

        return (
          <>
            <Title>Global results for 2019-04-21</Title>
            <FixtureList>
              {fixtures.sort((a, b) => a.league_id - b.league_id).map((fixture, i) => <FixtureItem key={i} fixture={fixture} />)}
            </FixtureList>
          </>
        );
      }}
    </Query>
  );
};

export default Fixtures;
