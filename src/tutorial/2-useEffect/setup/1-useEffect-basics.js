import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('call userEffect()');
    document.title = `new Message(${counter})`;
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
