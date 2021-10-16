import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Peter',
  //   num: 11,
  //   message: 'a random message',
  // });

  const [name, setName] = useState('Peter');
  const [num, setNum] = useState(11);
  const [message, setMessage] = useState('a random message');

  const changeMessage = () => {
    //setPerson({ ...person, message: 'message changed' });
    setMessage('Message changed');
  };

  return (
    <>
      <div>
        {/* <h3>{person.name}</h3>
        <h4>{person.num}</h4>
        <h4>{person.message}</h4> */}
        <h3>{name}</h3>
        <h4>{num}</h4>
        <h4>
          {message}
          <button onClick={changeMessage}> Change message</button>
        </h4>
        {/* <button className="btn" onClick={changeMessage}>
          change message
        </button> */}
      </div>
    </>
  );
};

export default UseStateObject;
