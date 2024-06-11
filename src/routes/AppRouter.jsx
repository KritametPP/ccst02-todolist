import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import React from 'react'
import Layout from '../layouts/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'

const guestRouter = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children : [
    { path : '', element: <Login/> },
    { path : '/register', element: <Register/> },
  ]
}])

function AppRouter() {
  return (
    <RouterProvider router={guestRouter} />
  )
}

export default AppRouter