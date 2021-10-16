import React from 'react';

const ErrorExample = () => {
  let title = 'Try to change this title';
  const handleClick = () => {
    title = 'hello there';
    console.log(title);
  };

  return (
    <React.Fragment>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
