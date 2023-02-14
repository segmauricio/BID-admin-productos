import React from "react";
import axios from "axios";
import './HomeButton.css';
import { useHistory } from "react-router-dom";

export default ({ productId, successCallback }) => {
  //const { productId, successCallback } = props;
  const history = useHistory();

  const takeMeHome = (e) => {
    axios
      .then(history.push("/products/"))
      
  };
  return <button onClick={takeMeHome} className='home-btn'>Home</button>;
};
