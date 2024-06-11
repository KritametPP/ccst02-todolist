import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login form</h1>
      <form className="login-form">
        <label>
          Username :
          <input type="text" name="name"/>
        </label>
        <label>
          Password :
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login