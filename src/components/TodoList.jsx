import { useState } from 'react';

function TodoList(props) {
  const { target, onClick } = props;
  return (
    <>
      <div>
        <ul>
          {target.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button type='button' onClick={onClick} className='is-visible'>
                  done
                </button>
                <button type='button' onClick={onClick}>
                  undo
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
