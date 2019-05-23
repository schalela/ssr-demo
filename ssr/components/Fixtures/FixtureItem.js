import React from 'react';
import styled from 'styled-components';

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

const TeamName = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Score = styled.div`
  width: 30%;
  text-align: center;
`;

const Goals = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 32px;
  line-height: 64px;
  margin: 0 0 16px;
`;

const Status = styled.div`
  display: block;
  font-size: 14px;
  color: #999;
`;

const FixtureItem = ({ fixture: { homeTeam, awayTeam, statusShort, goalsHomeTeam, goalsAwayTeam, logo } }) => {
  return (
    <ListItem>
      <Team>
        <TeamLogo src='' alt='' />
        <TeamName>{homeTeam}</TeamName>
      </Team>
      <Score>
        <Goals>{goalsHomeTeam} – {goalsAwayTeam}</Goals>
        <Status>{statusShort}</Status>
      </Score>
      <Team>
        <TeamLogo src='' alt='' />
        <TeamName>{awayTeam}</TeamName>
      </Team>
    </ListItem>
  );
};

export default FixtureItem;
