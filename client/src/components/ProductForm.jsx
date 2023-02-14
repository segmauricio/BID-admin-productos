import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./ProductForm.css";

export default (props) => {
  const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitProp( {title, price, description});
  };
  
  return (
    <div className="body">
      <form onSubmit={onSubmitHandler} className="form-body">
        <div className="field">
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="field">
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {setPrice(e.target.value)}}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </div>
        <button type="submit" className="create-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
