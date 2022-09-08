import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("You are not Logged in")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:8000/app/login", {
        method: "Get",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleLogin = () => {
    const configuration = {
      method: "get",
      url: "http://localhost:8000/app/login",

      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result);
        if (result.data.status) {
          setStatus(result.data.status);
        } else {
         // window.location.href = "/users";
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setPassword(" ");
  };
  return (
    <div>
      <>
        <Form onSubmit={handleLogin} className="Form">
          <Form.Label>Email Address</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="email"
              className="form"
              placeholder="Enter Email Adress"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="password"
              className="form"
              placeholder="Enter Password"
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
        {status}
      </>
    </div>
  );
};

export default Login;
