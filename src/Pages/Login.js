import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    const body = { email, password };
    if (email === " " || password === " ") {
      alert("Please enter Password or Username");
    }
    fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: 'cors',
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("email", body.email);
          window.location.href = "/sell";
        } else {
         alert("Password or Username is Incorrect")
        }
      });
  };
  return (
    <div>
      <>
        <Form onSubmit={handleLogin} className="Form">
          <Form.Label className="label">Email</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="email"
              className="form"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Label className="label">Password</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="password"
              className="form"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="button"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Form>
       
      </>
    </div>
  );
};

export default Login;
