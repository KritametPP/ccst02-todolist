import React, { useState } from 'react'

function TodoItem({
  job, editId, setEditId, hdlDelete, hdlUpdate
}) {

  const [inputTitle, setInputTitle] = useState(job.todo)
  const [jobDone, setJobDone] = useState(job.completed)

  const onSave = () => {
    const body = { ...job, todo: inputTitle, completed: jobDone }
    hdlUpdate(job.id, body)
  }

  const hdlCancel = () => {
    setInputTitle(job.todo)
    setEditId(-1)
  }

  return (
    <div className="todo-item">
      {job.id === editId ? (
        <>
          <input
            type="checkbox"
            checked={jobDone}
            onChange={e => setJobDone(e.target.checked)}
          />
          <input
            type="text"
            value={inputTitle}
            onChange={e => setInputTitle(e.target.value)}
          />
          <button onClick={onSave}>Save</button>
          <button onClick={hdlCancel}>Cancel</button>
        </>
      ) : (
        <>
          <input type="text" disabled value={job.todo}
            style={{ color: job.completed ? 'green' : '' }} />
          <button onClick={() => setEditId(job.id)}>Edit</button>
          <button onClick={() => hdlDelete(job.id)}>Delete</button>
        </>
      )

      }

    </div>
  )
}

export default TodoItem