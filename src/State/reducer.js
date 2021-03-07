import { ADD_TODO, DELETE_TODO, GET_TODOS } from "./types" //esto se pone pork no tiene default solo export

const initialStateTodo = (value) => {
  return {
    id: Math.random() * 1000,
    value: value
  }
}

const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        loading: true,
        todos: [...state.todos, initialStateTodo(action.payload)] //aÑADIR UN ELEMENTO DE LOS TODOS
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id) //filter todos los elementos los que tengan id y son diferentes no lo guarda
      }
    case GET_TODOS:
        return {
         ...state,
         todos: state.todos   //obtener la informacion de los todos
        }
    default:
      return {
        state
      }
  }
}
export default todosReducer