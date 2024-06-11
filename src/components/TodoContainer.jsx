import React from 'react'
import TodoItem from './TodoItem'

function TodoContainer({jobs, reload}) {
  return (
    <div className='todo-container'>
      { jobs.map( el => (
        <TodoItem key={el.id} job={el} reload={reload}/>
      ))

      }
    </div>
  )
}

export default TodoContainer

