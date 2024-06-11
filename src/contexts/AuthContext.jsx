import React, { createContext, useState } from 'react'

const AuthContext = createContext()
const userLogin = localStorage.getItem('user')

function AuthContextProvider(props) {
  const [isLogin, setIsLogin] = useState(!!userLogin)
  const [user, setUser] = useState(userLogin ? JSON.parse(userLogin) : null)
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
export default AuthContext
