import axios from "axios";
import { useState } from "react";
import useAuth from '../hooks/useAuth'

function Login() {

  const {setUser} = useAuth()
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!input.name.trim() || !input.password.trim()) {
      return alert("please fill all inputs");
    }
    try {
      const res = await axios.get(
        `http://localhost:8000/users?name=${input.name}`
      );
      if (!res.data.length) {
        return alert(`invalid login`);
      }
      const foundUser = res.data[0];
      if (foundUser.password !== input.password) {
        return alert(`invalid login`);
      }
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login form</h1>
      <form className="register-form" onSubmit={hdlSubmit}>
        <label>
          Username :
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={hdlChange}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
