import React from 'react';
import List from './List';
import participants from './store';


function App(props) {
  return (
    <div className="mainDiv">
    <List participants = {participants}/>
    </div>
  );
}

export default App;
