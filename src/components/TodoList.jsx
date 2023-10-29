import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem.jsx';
import { toggleTodo, deleteTodo, editTodo, fetchTodos } from '../actions/todoAction';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, visibilityFilter, fetchTodos }) => {
  useEffect(() => {
    fetchTodos(); 
  }, [fetchTodos]);

  let filteredTodos = todos;

  if (visibilityFilter === 'SHOW_ACTIVE') {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (visibilityFilter === 'SHOW_COMPLETED') {
    filteredTodos = todos.filter(todo => todo.completed);
  }

  return (
    <ul className="list-none p-0">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          onEdit={editTodo}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  editTodo,
  fetchTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);