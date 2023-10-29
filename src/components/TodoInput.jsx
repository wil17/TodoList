import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      await addTodo(text);
      setText('');
    }
  };

  return (
    <div className="text-center mt-6 flex flex-col md:flex-row items-start">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="w-full md:w-80 h-10 border border-gray-300 rounded-l px-4 mb-2 md:mb-0 md:mr-2" 
        placeholder="Apa yang ingin Anda lakukan hari ini?"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white py-2 px-4 md:px-6 rounded-md"
        style={{ borderRadius: '7px', backgroundColor: '#22A699' }}
      >
        Add Todo
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(TodoInput);
