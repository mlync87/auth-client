import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";

export default function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [registerResponse, setRegisterResponse] = useState("");
  const [loginResponse, setLoginResponse] = useState("");

  const register = async (e) => {
    e.preventDefault();
    // Write your register code here
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      //   set the body of the request, send data in json format
      // in order to do this use "stringify"
      body: JSON - stringify(user),
    };
    const response = await fetch("http://localhost:4000/register", options);

    const data = await response.json();
    setRegisterResponse(data.user.username);
    setUser({ username: " ", password: " " });
  };

  const login = async (e) => {
    e.preventDefault();

    // Write your login code here

    const options = {
      // send a post request
      method: "POST",
      //   set the headers
      headers: {
        "Content-type": "application/json",
      },
      //   set the body of the request, send data in json format
      // in order to do this use "stringify"
      body: JSON - stringify(user),
    };
    const response = await fetch("http://localhost:4000/register", options);

    const data = await response.json();
    setLoginResponse(data.acccess_token);
    // should store token in local storage in JWT
    localStorage.setItem("access token", data.access_token);
    // req params for login
    setUser({ username: " ", password: " " });
  };

  // You can safely ignore everything below this line, it's just boilerplate
  // so you can focus on the exercise requirements

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>Register</h1>

      <Form
        handleSubmit={register}
        inputs={[
          <Input
            key={1}
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            handleChange={handleChange}
          />,
          <Input
            key={2}
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            handleChange={handleChange}
          />,
        ]}
      />

      {registerResponse && <p>{registerResponse}</p>}

      <h1>Login</h1>

      <Form
        handleSubmit={login}
        inputs={[
          <Input
            key={1}
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            handleChange={handleChange}
          />,
          <Input
            key={2}
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            handleChange={handleChange}
          />,
        ]}
      />

      {loginResponse && <p>{loginResponse}</p>}
    </div>
  );
}
