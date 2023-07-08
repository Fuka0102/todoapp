import { useState } from 'react';
import { InputTodo, TodoList } from './components/index';
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

  const onClickAllDeleteButton = () => {
    setTodos([]);
  };

  return (
    <>
      <InputTodo value={todoText} onChange={onChangeTodoText} onClick={onClickRegistButton} />
      <TodoList target={todos} onClick={onClickDeleteButton} />
      <div>
        <button type='button' onClick={onClickAllDeleteButton} className={todos.length > 0 ? 'is-active' : ''}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;
