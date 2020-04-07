import React from 'react';

export default function chatDisplay(props) {
  return (
    <div className="session-participant" key={props.participantId}>
      <img src={props.avatar} alt={props.name} className="user-avatar" />
      <div className={props.type}>
        <h6 className="name">{props.name}</h6>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
