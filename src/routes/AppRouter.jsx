import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import TodoApp from '../pages/TodoApp'
import Profile from '../pages/Profile'
import useAuth from '../hooks/useAuth'

const guestRouter = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    { path: '', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <Navigate to='/' /> },
  ]
}])

const userRouter = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    { path: '', element: <TodoApp /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <Navigate to='/' /> },

  ]
}])

function AppRouter() {
  const { user } = useAuth()
  return (
    <RouterProvider router={user ? userRouter : guestRouter} />
  )
}

export default AppRouter