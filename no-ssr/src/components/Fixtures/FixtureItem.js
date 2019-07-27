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
  padding: 20px;
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
  margin: 0;
`;

const Status = styled.div`
  display: block;
  font-size: 14px;
  color: black;
`;

const getCdnLogo = logo => logo.replace('https://www.api-football.com/public', 'https://dfjrbg8kahfuv.cloudfront.net');

const FixtureItem = ({ fixture: { homeTeam, awayTeam, statusShort, goalsHomeTeam, goalsAwayTeam, elapsed, league: { logo } } }) => {
  return (
    <ListItem>
      <Team>
        <LazyLoad height={64} offsetVertical={680}>
          <TeamLogo src={`${getCdnLogo(homeTeam.logo)}?height=64`} alt={homeTeam.team_name} />
        </LazyLoad>
        <TeamName>{homeTeam.team_name}</TeamName>
      </Team>
      <Score>
        <LazyLoad height={40} offsetVertical={680}>
          <LeagueLogo src={`${getCdnLogo(logo)}?height=40`} alt={'League logo'} />
        </LazyLoad>
        <Goals>{goalsHomeTeam} – {goalsAwayTeam}</Goals>
        <Status>{statusShort}</Status>
      </Score>
      <Team>
        <LazyLoad height={64} offsetVertical={680}>
          <TeamLogo src={`${getCdnLogo(awayTeam.logo)}?height=64`} alt={awayTeam.team_name} />
        </LazyLoad>
        <TeamName>{awayTeam.team_name}</TeamName>
      </Team>
    </ListItem>
  );
};

export default FixtureItem;
