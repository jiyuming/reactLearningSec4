import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexSetValue = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h3>Regular Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>
          - decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          + increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h3>Complex Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={complexSetValue}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
