import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  width: 280px;
  place-items: center;
  justify-content: space-between;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamResult = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  width: 200px;
`;

const Status = styled.div`
  border-left: 2px solid;
  height: 50px;
  padding-left: 20px;
`;

const FixtureItem = ({ fixture: { homeTeam, awayTeam, statusShort, goalsHomeTeam, goalsAwayTeam } }) => {
  return (
    <ListItem>
      <Teams>
        <TeamResult>
          <div>{homeTeam}</div>
          <div>{goalsHomeTeam}</div>
        </TeamResult>
        <TeamResult>
          <div>{awayTeam}</div>
          <div>{goalsAwayTeam}</div>
        </TeamResult>
      </Teams>
      <Status>{statusShort}</Status>
    </ListItem>
  );
};

export default FixtureItem;
