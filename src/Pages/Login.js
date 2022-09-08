import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("You are not Logged in")

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = { email, password };

    fetch("http://localhost:8000/app/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data);
          window.localStorage.setItem("logged_in_user", body.email);
          window.location.href = "/sell";
        }
        else{
          alert("Password or Username is Incorrect")
        }
      });
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
