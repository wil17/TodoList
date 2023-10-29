import React from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import TodoFilter from './components/TodoFilter.jsx';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo List Homework Willy</h1>
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default App;