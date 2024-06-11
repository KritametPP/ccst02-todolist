import {createContext, useState} from 'react'

const AuthContext = createContext()

const userLogin = localStorage.getItem('user')



function AuthContextProvider({children}) {
  const [user, setUser] = useState(JSON.parse(userLogin))
  const isLogin = () => !!user

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
export default AuthContext