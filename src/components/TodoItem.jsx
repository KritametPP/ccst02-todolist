import axios from 'axios'
import React, { useState } from 'react'

function TodoItem({ job, reload, editId, setEditId }) {

  const [inputTitle, setInputTitle] = useState(job.todo)

  const hdlDelete = async () => {
    if (!confirm('Confirm to delete ?')) {
      return
    }
    try {
      await axios.delete(`http://localhost:8000/jobs/${job.id}`)
      reload()
    } catch (error) {
      console.log(error.message)
    }
  }

  const hdlUpdate = async () => {
    const body = { ...job, todo: inputTitle }
    try {
      await axios.put(`http://localhost:8000/jobs/${job.id}`, body)
      reload()
    } catch (error) {
      console.log(error.message)
    }
  };

  const hdlCancel = () => {
    setInputTitle(job.todo)
    setEditId(-1)
  }

  return (
    <div className="todo-item">
      {job.id === editId ? (
        <>
          <input
            type="text"
            value={inputTitle}
            onChange={e => setInputTitle(e.target.value)}
          />
          <button onClick={hdlUpdate}>Save</button>
          <button onClick={hdlCancel}>Cancel</button>
        </>
      ) : (
        <>
          <input type="text" disabled value={job.todo} />
          <button onClick={() => setEditId(job.id)}>Edit</button>
          <button onClick={hdlDelete}>Delete</button>
        </>
      )

      }

    </div>
  )
}

export default TodoItem