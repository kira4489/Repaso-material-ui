import {ADD_TODO,DELETE_TODO} from "./types"


export const saveTodoReducer = (text) => ({
      type: ADD_TODO,
      payload: text,
})

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  }
}