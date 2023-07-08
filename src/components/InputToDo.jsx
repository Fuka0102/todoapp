import { useState } from 'react';

function InputTodo(props) {
  const { value, onChange, onClick } = props;

  return (
    <>
      <div>
        <input type='text' value={value} onChange={onChange} />
        <button type='button' onClick={onClick}>
          Add
        </button>
      </div>
    </>
  );
}

export default InputTodo;
