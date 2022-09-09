import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

const Register = () => {
    const [firstname,setFirstName] = useState(" ");
    const [lastname,setLastName] = useState(" ");
    const [phone,setPhone] = useState(" ");
    const [address,setAddress] = useState(" ");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const body = { firstname,email,password,lastname,phone,address};
          const response = await fetch("http://localhost:8000/api/v1/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: 'cors',
            body: JSON.stringify(body),
          });
          console.log(response);
        } catch (err) {
          console.log(err.message);
        }
      };
  return (
    <div>
        <Form onSubmit={handleSubmit} className="Form">
        <Form.Label>First Name</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="text"
              className="form"
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="text"
              className="form"
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="number"
              className="form"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Form.Group>
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
          <Form.Label>Address</Form.Label>
          <Form.Group className="mb-31">
            <Form.Control
              type="text"
              className="form"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
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
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Form>
    </div>
  )
}

export default Register
