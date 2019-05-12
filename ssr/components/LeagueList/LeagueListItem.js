import React from 'react';

const LeagueListItem = ({ league: { name, logo, flag, season } }) => {
  return (
    <li>
      <div>{name}</div>
      <img width={50} src={flag} />
      <div>{season}</div>
    </li>
  );
};

export default LeagueListItem;
