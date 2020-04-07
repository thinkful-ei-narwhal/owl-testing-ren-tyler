import React from 'react';
import store from './store';

export function person(props) {
  return (
    <div className="session-participant" key={props.id}>
      <img src={props.avatar} alt={props.name} className="user-avatar" />
      <div className="info">
        <h6 className="name">{props.name}</h6>
        <div className="status">{props.status}</div>
      </div>
    </div>
  );
}
