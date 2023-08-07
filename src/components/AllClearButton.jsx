import { useState } from 'react';

function AllClearButton(props) {
  const { onClick, className } = props;

  return (
    <>
      <div>
        <button type='button' onClick={onClick} className={className}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default AllClearButton;
