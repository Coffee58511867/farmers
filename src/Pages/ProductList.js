import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Row, Card, Button, Table } from "react-bootstrap";
import Sell from "./Sell";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [updateDetails, setUpdateDetails] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    delivery: '',
    location: ''
  });

  

  
 
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products/readproducts").then((response) => {
      let arrayOfMrs = [];

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].email === localStorage.getItem("email")) {
          arrayOfMrs.push(response.data[i]);
        }
      }

      setProducts(arrayOfMrs);
    });
  }, []);
  const deleteTodo = async (id) => {
    const del = {
      method: "delete",
      url: "http://localhost:8000/api/v1/products/deleteproducts/" + id,
    };
    axios(del)
      .then((result) => {
        alert("Item Deleted Successful");
        setProducts(products.filter((val) => val._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateProduct = (item) => {
    
    console.log(item)
    setUpdateDetails({
      title: item.title,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
      location: item.location,
      delivery: item.delivery
    });

    window.localStorage.setItem("updateDetails", updateDetails);

    
    // const update = {
    //   method: "PUT",
    //   url: "http://localhost:8000/app/updateproduct/" + id,
    // };
    // axios(update)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delivery</th>
            <th>Location</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.description}</td>
                <td>{val.price}</td>
                <td>{val.quantity}</td>
                <td>{val.delivery}</td>
                <td>{val.location}</td>

                <td>
                  <Button onClick={() => updateProduct(val)}>Edit</Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={() => deleteTodo(val._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
