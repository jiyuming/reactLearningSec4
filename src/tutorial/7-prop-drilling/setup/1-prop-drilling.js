import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h2>prop drilling</h2>
      <List people={people} />
    </PersonContext.Provider>
  );
};
const List = ({ people }) => {
  return people.map((person) => {
    return <Person key={person.id} id={person.id} name={person.name} />;
  });
};
const Person = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default PropDrilling;
