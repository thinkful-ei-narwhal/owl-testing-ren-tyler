import React from 'react';
import store from './store';

// Show all current or former part. in session
// Show name, avatar, and whether in session
//In ses part shown b4 part who left

export function list(props) {
  const parts = props.participants.map((person) => {<person key={person.id} title={person.title} content={person.content} />}
  
  const sort =  parts.status.sort(function (x, y) {
      return x === y ? 0 : x ? -1 : 1;
  }

  return (
    <div className="participant-list">
      {parts}
    </div>
  );
}
