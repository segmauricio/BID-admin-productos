import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Detail.css";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const [product, setProducto] = useState({});
  const {removeFromDom} = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.match.params.id)
      .then((res) =>
        setProducto({
          ...res.data,
        })
      )
      .catch((err) => console.log("The error is here", err));
  }, []);

  return (
    <div style={{ marginTop: "130px" }}>
      <p style={{ fontSize: "25px" }}>{product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button className="edit-btn">
        <Link to={"/products/" + product._id + "/edit"}>Editar</Link>
      </button>
      <DeleteButton
              productId={product._id}
              successCallback={() => removeFromDom(product._id)}
      />
    </div>
  );
};
