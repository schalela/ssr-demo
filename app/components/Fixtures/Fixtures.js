import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FixtureItem from './FixtureItem';

const GET_FIXTURES = gql`
  query fixtures($date: String!) {
    fixtures(date: $date) {
      fixture_id
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

const Fixtures = () => {
  return (
    <Query query={GET_FIXTURES} variables={{ date: '2019-04-20' }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { fixtures } = data;

        return (
          <ul>
            {fixtures.map((fixture, i) => <FixtureItem key={i} fixture={fixture} />)}
          </ul>
        );
      }}
    </Query>
  );
};

export default Fixtures;
