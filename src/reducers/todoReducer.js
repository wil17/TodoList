import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER, SET_TODOS } from '../actions/actionTypes';

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text
          }
        ]
      };
      case SET_VISIBILITY_FILTER:
    return {
    ...state,
    visibilityFilter: action.filter
  };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        )
      };
      case SET_TODOS:
  return {
    ...state,
    todos: action.todos
  };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state;
  }
};

export default todoReducer;
