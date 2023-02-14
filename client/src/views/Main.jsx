import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })      
            .catch(err => console.log("Error: ", err)) 
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data])
                
            })
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })           
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            <p style={{color: "red"}}>
                {
                    errors.map((err, index) => <p key={index}>{err}</p>)
                }
            </p>
            
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {
                loaded && <ProductList listadeproductos={products} removeFromDom={removeFromDom}/>
            }
        </div>
    )
}

