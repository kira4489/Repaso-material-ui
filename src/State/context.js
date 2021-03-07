import { createContext,useState, useReducer } from 'react'
import todosReducer from './reducer';
import {deleteTodo,saveTodoReducer, updateTodo} from "./actions"

export const ContextTodo = createContext();

const TodoContext = ({ children }) => {
  // solo context
  // const [todos, setTodos] = useState([])
  
  // const saveTodo = (text) => {
  //   const initialState = {
  //     id: 0,
  //     value: text
  //   };
    
  //   setTodos([...todos, initialState ])
  // }
  
  const initialState = {
    todos: [],
    loading: false,
    error: null
  }
  
  const [state, dispatch] = useReducer(todosReducer, initialState)//Dispatch es cmo una accion de lo que va hacer y se pasa el payload en el redcuer

  return (
    <ContextTodo.Provider value={{
      //todos: context
      //saveTodo, context
      todos: state.todos, //reducer, no redux!
      saveTodo: (text) => dispatch(saveTodoReducer(text)), //reducer,no redux
      deleteTodo: (id) => dispatch(deleteTodo(id)), //reducer,no redux
      updateTodo: (id,newValue) => dispatch(updateTodo(id,newValue))//reducer,no redux
    }}>
      { children }
    </ContextTodo.Provider>
  )
}

export default TodoContext;