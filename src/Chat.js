import React from 'react';
import chatEvents from './events';
import participants from './store';
import chatDisplay from './chatParts';

export default function Chat(props) {
  const events = props.events.map((event) => (
    <li key={}>
      <chatDisplay
        type={event.type}
        message={event.message}
        timestamp={event.timestamp}
        participants={props.participants.find(
          (participant) => participant.id === event.participantId
        )}
      />
    </li>
  ));
  return <ul className="chat">{events}</ul>;
}
