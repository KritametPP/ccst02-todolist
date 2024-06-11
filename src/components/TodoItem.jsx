import React from 'react'

function TodoItem({job}) {
  return (
    <div className="todo-item">
      <input type="text" disabled value={job.todo}/>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem