import { useState } from 'react';
import { InputTodo, TodoList, AllClearButton } from './components/index';
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

  const onClickButton = (e) => {
    const target = e.currentTarget;
    const targetTodo = target.closest('li');
    const targetButton =
      target.getAttribute('data-button-role') === 'done' ? target.nextElementSibling : target.previousElementSibling;

    target.classList.toggle('is-visible');
    targetTodo.classList.toggle('is-done');
    targetButton.classList.toggle('is-visible');
  };

  const onClickAllDeleteButton = () => {
    setTodos([]);
  };

  return (
    <div className='wrapper'>
      <InputTodo value={todoText} onChange={onChangeTodoText} onClick={onClickRegistButton} />
      <TodoList target={todos} onClick={onClickButton} />
      <AllClearButton onClick={onClickAllDeleteButton} class={todos.length > 0 ? 'is-active' : ''} />
    </div>
  );
}

export default App;
