import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const EventItem = ({ event }) => {
  const { name, where, when, comments } = event;
  return (
    <>
      <div>Event: {name}</div>
      <div>When: {when}</div>
      <div>Where: {where}</div>
      <ul>
        {comments.map((comment, i) => <li key={i}>{ReactHtmlParser(comment.content)}</li>)}
      </ul>
    </>
  );
};

export default EventItem;
