import axios from 'axios'
import React from 'react'

function TodoItem({job, reload}) {

  const hdlDelete = async () => {
    if(!confirm('Confirm to delete ?')){
      return
    }
    try {
      await axios.delete(`http://localhost:8000/jobs/${job.id}`)
      reload()
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <div className="todo-item">
      <input type="text" disabled value={job.todo}/>
      <button>Edit</button>
      <button onClick={hdlDelete}>Delete</button>
    </div>
  )
}

export default TodoItem