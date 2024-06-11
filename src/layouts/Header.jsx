import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Header() {
  const { user, setUser } = useAuth()
  const hdlLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  return (
    <header>
      {user && <h2>{user.name}</h2>}
      {user ? (
        <nav>
          <Link to='/'>Jobs Todo</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
      ) : (
        <nav>
          <Link to='/'>Login</Link>
          <Link to='/register'>Register</Link>
        </nav>
      )}
      {user && <button onClick={hdlLogout}>Logout</button>}

    </header>
  );
}

export default Header