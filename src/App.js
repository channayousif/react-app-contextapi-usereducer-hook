import React, {useState} from 'react';
import Parent from './Parent';

function App() {
  var st = 99;
  let [state,setState] = useState(st);
  return (
    <div>
      <Parent stt={state}/>
    </div>
  );
}

export default App;
