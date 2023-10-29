import axios from 'axios';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, EDIT_TODO, SET_TODOS } from './actionTypes';

export const setTodos = (todos) => ({
  type: SET_TODOS,
  todos
});

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://65393e17e3b530c8d9e829bc.mockapi.io/todos', { text });

      dispatch({
        type: ADD_TODO,
        text: response.data.text,
        id: response.data.id
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://65393e17e3b530c8d9e829bc.mockapi.io/todos');

      dispatch(setTodos(response.data));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const toggleTodo = (id, completed) => {
  return async (dispatch) => {
    try {
      await axios.put(`https://65393e17e3b530c8d9e829bc.mockapi.io/todos/${id}`, { completed });

      dispatch({
        type: TOGGLE_TODO,
        id
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://65393e17e3b530c8d9e829bc.mockapi.io/todos/${id}`);

      dispatch({
        type: DELETE_TODO,
        id
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const editTodo = (id, text) => {
  return async (dispatch) => {
    try {
      await axios.put(`https://65393e17e3b530c8d9e829bc.mockapi.io/todos/${id}`, { text });

      dispatch({
        type: EDIT_TODO,
        id,
        text
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
