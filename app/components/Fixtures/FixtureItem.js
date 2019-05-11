import React from 'react';

const FixtureItem = ({ fixture: { homeTeam, awayTeam, statusShort, final_score: finalScore } }) => {
  return (
    <li>
      <p>{homeTeam} vs {awayTeam}</p>
      <div>{statusShort}: {finalScore}</div>
    </li>
  );
};

export default FixtureItem;
