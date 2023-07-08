import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <>
      <div>
        <input type='text' value={todoText} onChange={onChangeTodoText} />
        <button type='button'>Add</button>
      </div>
    </>
  );
}

export default App;
