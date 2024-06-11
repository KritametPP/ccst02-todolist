import React from 'react'
import Dashboard from "../components/Dashboard";
import FormAddTodo from "../components/FormAddTodo";
import TodoContainer from "../components/TodoContainer";


function TodoApp() {
  return (
    <>
    <h1>Jobs</h1>
    <div className="todoapp">
        <Dashboard/>
        <FormAddTodo/>
        <TodoContainer/>

    </div>
    </>
  )
}

export default TodoApp