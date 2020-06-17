import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
        <Child sttt={props.stt}/>
    </div>
  );
}

export default Parent
;
