import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Row, Card, Button } from "react-bootstrap";

const Market = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = {
      method: "get",
      url: "http://localhost:8000/app/readproducts",
    };
    axios(data)
      .then((result) => {
        console.log(result);
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {products.map((value) => {
        return (
          <>
          <div className="container">
            <Row className="row">
              <Card className="card" style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>{value.id}</Card.Title>
                  <Card.Text>{value.title}</Card.Text>
                  <Card.Title>{value.price}</Card.Title>
                  <Card.Text>Quantity : {value.quantity}</Card.Text>
                  <Card.Text><h6>{value.location}</h6></Card.Text>
                </Card.Body>
              </Card>
            </Row>
            </div>
          </>
        );
      })}
    
    </div>
  );
};

export default Market;
