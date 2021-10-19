import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hi there',
};

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName('');
    } else {
      // setShowModal(true);
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit"> add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Index;
