import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LeagueListItem from './LeagueListItem';

const GET_LEAGUES = gql`
  query leagues {
    leagues {
      league_id
      name
      season
      flag
      logo
    }
  }
`;

const LeagueList = ({ initialLeague }) => {
  const displayLeagues = [];

  return (
    <Query query={GET_LEAGUES}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { leagues } = data;

        for (let i = initialLeague; i < initialLeague + 15; i++) {
          displayLeagues.push(leagues[i]);
        }

        return (
          <ul>
            {displayLeagues.map((league, i) => <LeagueListItem key={i} league={league} />)}
          </ul>
        );
      }}
    </Query>
  );
};

export default LeagueList;
