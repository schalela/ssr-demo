import gql from 'graphql-tag';

export default gql`
  query fixtures($date: String!) {
    fixtures(date: $date) {
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
      goalsHomeTeam
      goalsAwayTeam
    }
  }
`;
