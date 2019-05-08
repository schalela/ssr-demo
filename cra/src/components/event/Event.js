import React from 'react';
import gql from 'graphql-tag';
import ReactHtmlParser from 'react-html-parser';
import { Query } from 'react-apollo';

const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event: getEvent(id: $id) {
      id
      name
      where
      when
      comments {
        content
        createdAt
      }
    }
  }
`;

const Event = ({ id }) => {
  return (
    <Query query={GET_EVENT} variables={{ id }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { event: { name, where, when, comments } } = data;
        return (
          <>
            <div>Event: {name}</div>
            <div>When: {when}</div>
            <div>Where: {where}</div>
            <div>Comments:</div>
            <ul>
              {comments.map((comment, i) => <li key={i}>{ReactHtmlParser(comment.content)}</li>)}
            </ul>
          </>
        );
      }}
    </Query>
  );
};

export default Event;
