import gql from 'graphql-tag';

export default gql`
  query fixtures($date: String!) {
    fixtures(date: $date) {
      fixture_id
      league_id
      league {
        logo
      }
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
