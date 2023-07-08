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
    alert(todos);
  };

  return (
    <>
      <div>
        <input type='text' value={todoText} onChange={onChangeTodoText} />
        <button type='button' onClick={onClickRegistButton}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;
