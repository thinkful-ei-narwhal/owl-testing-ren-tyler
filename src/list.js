import React from 'react';
import store from './store';

// Show all current or former part. in session
// Show name, avatar, and whether in session
//In ses part shown b4 part who left

export function list(props) {
  const sortedArray = props.store.slice().sort(function (x, y) {
    return x === y ? 0 : x ? -1 : 1;
  });
  const parts = sortedArray.map((person) => {
    return (
      <person key={person.id} title={person.title} content={person.content} />
    );
  });

  return <div className="participant-list">{parts}</div>;
}
