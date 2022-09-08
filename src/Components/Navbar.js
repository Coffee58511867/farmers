import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BrowserRouter} from "react-router-dom";
import Sell from "../Pages/Sell";
import Market from "../Pages/Market";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

const Navba = () => {

    const SignIn = () =>{
        window.location.href = "/login"
    }
    const SellProduct = () =>{
        window.location.href = "/sell"
    }
  return (
    <div>
        <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Farmers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">MarketPlace</Nav.Link>
            <Nav.Link href="#features">Diseases</Nav.Link>
            <Nav.Link href="#pricing">Fertilizers</Nav.Link>
            <Nav.Link href="#pricing"> Weather</Nav.Link>
          </Nav>
        </Container>
        
        <Button variant="outline-primary" className="btn" onClick={SellProduct}>    
        Sign Up</Button>{" "}
        <Button variant="outline-success" onClick={SignIn}>Sign In</Button>{" "}
      </Navbar>

      <Routes>
        <Route path="/sell" element={<Sell />} />
        <Route path="/" element={<Market />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navba;
