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

  const onClickDoneButton = (e) => {
    const target = e.currentTarget;
    const targetTodo = target.closest('li');
    const targetUndoButton = target.nextElementSibling;

    target.classList.toggle('is-visible');
    targetTodo.classList.toggle('is-done');
    targetUndoButton.classList.toggle('is-visible');
  };

  const onClickAllDeleteButton = () => {
    setTodos([]);
  };

  return (
    <>
      <InputTodo value={todoText} onChange={onChangeTodoText} onClick={onClickRegistButton} />
      <TodoList target={todos} onClick={onClickDoneButton} />
      <AllClearButton onClick={onClickAllDeleteButton} class={todos.length > 0 ? 'is-active' : ''} />
    </>
  );
}

export default App;
