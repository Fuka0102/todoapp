import { useState } from 'react';

function TodoList(props) {
  const { target, onClick } = props;
  return (
    <>
      <ul className='todo_list'>
        {target.map((item, index) => {
          return (
            <li key={index} className='todo_list-item'>
              <span className='todo_list-text'>{item}</span>
              <div className='todo_list-item_button_wrapper'>
                <button
                  type='button'
                  onClick={onClick}
                  className='todo_list-done_button is-visible'
                  data-button-role='done'
                >
                  done
                </button>
                <button type='button' onClick={onClick} className='todo_list-undo_button' data-button-role='undo'>
                  undo
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
