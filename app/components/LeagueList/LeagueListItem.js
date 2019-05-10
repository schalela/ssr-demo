import React from 'react';

const LeagueListItem = ({ league: { name, logo, flag, season } }) => {
  return (
    <div>
      <div>{name}</div>
      <img width={50} src={flag} />
      <div>{season}</div>
    </div>
  );
};

export default LeagueListItem;
