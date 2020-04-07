import React from 'react';
import store from './store';

function Person(props) {
  return (
    <div className="session-participant" key={props.id}>
      <img src={props.avatar} alt={props.name} className="user-avatar" />
      <div className="info">
        <h6 className="name">{props.name}</h6>
        <div
          className={props.inSession === 'true' ? 'in session' : 'left session'}
        ></div>
        <div className={props.onStage}></div>
      </div>
    </div>
  );
}

export default Person;
