import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";
import './Update.css'

export default (props) => {
  const { id } = props.match.params;
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
  }, [])

  const updateProduct = producto => {
    axios.put('http://localhost:8000/api/products/' + id, producto)
        .then(res => console.log(res))
        .then(history.push("/products/"+id))
  }

  return (
    <div className='body'>
      <h1>Update a Product</h1>
      {loaded && (
            <>
                <ProductForm
                    onSubmitProp = {updateProduct}
                    initialTitle = {product.title}
                    initialPrice = {product.price}
                    initialDescription = {product.description}
                />
                <div style={{marginTop: "15px", marginLeft:"-10px"}}>
                  <DeleteButton productId={product._id} successCallback={() => props.history.push("/products")} />
                </div>
                
            </>
        )}
    </div>
  );
};

