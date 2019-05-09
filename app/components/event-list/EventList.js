import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import EventItem from './EventItem';

const GET_EVENTS = gql`
  query ListEvents {
    events: listEvents {
        id
        name
        when
        where
        comments {
          content
          createdAt
        }
    }
  }
`;

const EventList = () => {
  return (
    <Query query={GET_EVENTS}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { events } = data;
        return events.map((event, i) => <EventItem key={i} event={event} />);
      }}
    </Query>
  );
};

export default EventList;
