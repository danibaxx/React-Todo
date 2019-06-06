import React from 'react';

const TodoForm = (props) => {
  return (
    <div className="to-do-form">
      <input 
      type='text'
      placeholder='...to do' />
      <button type='submit'>Add To Do</button>
      <button type='submit'>Clear Completed</button>
    </div>
  );
}

export default TodoForm;