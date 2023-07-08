import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickRegistButton = () => {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
  };

  const onClickDeleteButton = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <>
      <div>
        <input type='text' value={todoText} onChange={onChangeTodoText} />
        <button type='button' onClick={onClickRegistButton}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <button type='button' onClick={() => onClickDeleteButton(index)}>
                  done
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
