import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const defaultState = {
  people: data,
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
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
      setName('');
      return {
        ...state,
        people: newPerson,
        isModalOpen: true,
        modalContent: 'item added',
      };
    } else {
      // setShowModal(true);
      dispatch({ type: 'NO_VALUE' });
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter value',
      };
    }
  };

  // close the Modal
  const closeModal = () => {
    dispatch({ type: 'CLOASE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
            <h3>
              {person.name}
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_ITEM', payload: person.id })
                }
              >
                Remove
              </button>
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default Index;
