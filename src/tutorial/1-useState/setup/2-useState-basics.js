import React, { useState } from 'react';

let counter = 0;
const UseStateBasics = () => {
  let [title, changeTitle] = useState('Title to be changed');

  const handleClick = () => {
    counter++;
    changeTitle('Title changed ' + counter + ' times');
  };

  return (
    <React.Fragment>
      <h3>{title}</h3>
      <button className="btn" onClick={handleClick}>
        Click to change the text above
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
