import React from "react";
import axios from "axios";
import './DeleteButton.css';
import { useHistory } from "react-router-dom";

export default (props) => {
  const { productId, successCallback } = props;
  const history = useHistory();

  const deleteProduct = (e) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then(history.push("/products/"))
      .then((res) => {
        successCallback();
      })
      
  };
  return <button onClick={deleteProduct} className='delete-btn'>Delete</button>;
};
