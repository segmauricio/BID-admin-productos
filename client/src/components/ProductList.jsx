import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";
import DeleteButton from "./DeleteButton";

export default (props) => {
  const [products, setProducts] = useState([]);

  const removeFromDom = (personId) => {
    setProducts(products.filter((product) => product._id != product.Id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

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
              successCallback={() => removeFromDom(product._id)}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
};
