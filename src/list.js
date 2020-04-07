import React from 'react';
import participants from './store';
import Person from './parts';

// Show all current or former part. in session
// Show name, avatar, and whether in session
//In ses part shown b4 part who left

export default function List(props) {
  const sortedArray = props.participants.slice().sort(function (x, y) {
    return x.inSession === y.inSession ? 0 : x.inSession ? -1 : 1;
  });
  const parts = sortedArray.map((person) => {
    return (
      <Person key={person.id} name={person.name} avatar={person.avatar} status={person.inSession} />
    );
  });

  return <div className="participant-list">{parts}</div>;
}
