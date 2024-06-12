import React, { useState } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

function TodoContainer({ jobs, reload }) {
  const [editId, setEditId] = useState(-1)


  const hdlDelete = async (jobId) => {
    if (!confirm('Confirm to delete ?')) {
      return
    }
    try {
      await axios.delete(`http://localhost:8000/jobs/${jobId}`)
      reload()
    } catch (error) {
      console.log(error.message)
    }
  }

  const hdlUpdate = async (jobID, body) => {
    // const body = { ...job, todo: inputTitle, completed: jobDone }
    try {
      await axios.put(`http://localhost:8000/jobs/${jobID}`, body)
      reload()
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className='todo-container'>
      {jobs.map(el => (
        <TodoItem
          key={el.id}
          job={el}
          editId={editId}
          setEditId={setEditId}
          hdlDelete={hdlDelete}
          hdlUpdate={hdlUpdate}
        />
      ))

      }
    </div>
  )
}

export default TodoContainer

