import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 640px;
  max-width: calc(100% - 32px);
  font-size: 16px;
  padding: 32px;
  border-radius: 8px;
  margin-bottom: 16px;
  place-items: center;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);

  @media (max-width: 500px) {
    padding: 24px 8px;
  }
`;

const Team = styled.div`
  width: 35%;
  text-align: center;
`;

const TeamLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  background: #f2f2f2;
  border-radius: 32px;
`;

const LeagueLogo = styled.img`
  height: 40px;
`;

const TeamName = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
`;

const Goals = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 32px;
  line-height: 64px;
  margin: 0 0 16px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #279A24;
  width: 30px;
`;

const LiveBar = styled.div`
  height: 2px;
  width: 30%;
  margin: 0px 30px;
  background-color: green;
  animation: live-indicator 0.5s infinite alternate;

  @keyframes live-indicator {
    from { margin-left: 5px; }
    to { margin-left: 15px; }
  }
`;

const FixtureItem = ({ fixture: { homeTeam, awayTeam, statusShort, goalsHomeTeam, goalsAwayTeam, elapsed, league: { logo } } }) => {
  return (
    <ListItem>
      <Team>
        <LazyLoad offsetVertical={300}>
          <TeamLogo src={homeTeam.logo} alt={homeTeam.team_name} />
        </LazyLoad>
        <TeamName>{homeTeam.team_name}</TeamName>
      </Team>
      <Score>
        <LazyLoad offsetVertical={300}>
          <LeagueLogo src={logo} />
        </LazyLoad>
        <Goals>{goalsHomeTeam} – {goalsAwayTeam}</Goals>
        <Time>
          {elapsed}'
          {statusShort !== 'HT' && statusShort !== 'FT' && <LiveBar />}
        </Time>
      </Score>
      <Team>
        <LazyLoad offsetVertical={300}>
          <TeamLogo src={awayTeam.logo} alt={awayTeam.team_name} />
        </LazyLoad>
        <TeamName>{awayTeam.team_name}</TeamName>
      </Team>
    </ListItem>

  );
};

export default FixtureItem;
