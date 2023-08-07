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
                <button type='button' onClick={() => onClick(index)}>
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

export default TodoList;
