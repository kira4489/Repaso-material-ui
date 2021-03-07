import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types";

export const saveTodoReducer = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

export const updateTodo = (id, newValue) => {
  return {
    type: UPDATE_TODO,
    payload: newValue,
    id: id,
  };
};
