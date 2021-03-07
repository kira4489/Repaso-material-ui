import Home from "./Components/Home";
import Todo from "./Components/Todo";
import "./App.css";
import TodoContext from './State/context';

function App() {
  return (
    <TodoContext>
      <div className="App">
        <Home />
        <Todo/>
      </div>
    </TodoContext>
  );
}

export default App;
