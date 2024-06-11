import React from 'react'
import TodoItem from './TodoItem'

function TodoContainer({jobs}) {
 
  return (
    <div className='todo-container'>
      { jobs.map( el => (
        <TodoItem key={el.id} job={el} />
      ))

      }
    </div>
  )
}

export default TodoContainer

