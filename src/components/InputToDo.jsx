import { useState } from 'react';

function InputTodo(props) {
  const { value, onChange, onClick } = props;

  return (
    <>
      <div className='todo_input'>
        <input type='text' value={value} onChange={onChange} className='todo_input-form' />
        <button type='button' onClick={onClick} className='todo_input-button'>
          Add
        </button>
      </div>
    </>
  );
}

export default InputTodo;
