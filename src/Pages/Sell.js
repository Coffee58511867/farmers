import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ProductList from "./ProductList";
const Sell = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivery, setDelivery] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const user = localStorage.getItem("email")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { title, description, price, quantity, delivery, location, email};
      const response = await fetch("http://localhost:8000/app/uploadproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleLogout = () => {
    window.location.href = "/";
  }
  return (
    <div>
      <h5>Welcome : {user}</h5>
      <Button className="logout" variant="outline-warning" onClick={handleLogout}>Logout Here</Button>{' '}
      <Form>
        <Form.Group className="mb-3" onSubmit={handleSubmit}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Quantity"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Delivery"
            onChange={(e) => setDelivery(e.target.value)}
            value={delivery}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            className="form"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            className="form"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ProductList />
    </div>
  );
};

export default Sell;
