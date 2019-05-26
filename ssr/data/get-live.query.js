import gql from 'graphql-tag';

export default gql`
  query live {
    fixtures: live {
      fixture_id
      league_id
      homeTeam {
        team_id
        team_name
        logo
      }
      awayTeam {
        team_id
        team_name
        logo
      }
      statusShort
      goalsHomeTeam
      goalsAwayTeam
    }
  }
`;
