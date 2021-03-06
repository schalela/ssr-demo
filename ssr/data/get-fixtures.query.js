import gql from 'graphql-tag';

export default gql`
  query fixtures {
    fixtures {
      fixture_id
      league_id
      league {
        logo
      }
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
      elapsed
      goalsHomeTeam
      goalsAwayTeam
    }
  }
`;
