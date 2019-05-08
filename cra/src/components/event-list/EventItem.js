import React from 'react';
import Link from '../../utils/link';

const EventItem = ({ event }) => {
  const { id, name, where, when } = event;
  return (
    <Link to={`/event/${id}`}>
      <div>Event: {name}</div>
      <div>When: {when}</div>
      <div>Where: {where}</div>
    </Link>
  );
};

export default EventItem;
