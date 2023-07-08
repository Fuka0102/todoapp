import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickRegistButton = () => {
    alert(todoText);
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
