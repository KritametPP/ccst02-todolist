import React from 'react'
import Dashboard from "../components/Dashboard";
import FormAddTodo from "../components/FormAddTodo";
import TodoContainer from "../components/TodoContainer";
import useFetch from '../hooks/useFetch'


function TodoApp() {
  const [jobs, error, loading, reload] = useFetch(`http://localhost:8000/jobs`)

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error : {error.message}</h1>
  }

  return (
    <>
      <h1>Jobs</h1>
      <div className="todoapp">
        <Dashboard amount={jobs.length} />
        <FormAddTodo reload={reload} />
        <TodoContainer jobs={jobs} />

      </div>
    </>
  )
}

export default TodoApp