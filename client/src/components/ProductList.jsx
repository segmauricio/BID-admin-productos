import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import DeleteButton from "./DeleteButton";

export default (props) => {              //listadeproductos en vez de props
  return (
    <div className="list-body">
      <h2>All Products:</h2>

      <div className="listadeProductos">
        {props.listadeproductos.map((product, idx) => {
          return (
            <div key={idx} className="link-productos">
              <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
              <DeleteButton
              productId={product._id}
              successCallback={() => props.removeFromDom(product._id)}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
};
