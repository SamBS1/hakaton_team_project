import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import '../../styles/AddProduct.css'

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className="div33">
      <h1>Product adding</h1>
    <div className="div22">
      <input type="text" placeholder="Title" name="name" onChange={handleInp} />
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Picture"
        name="picture"
        onChange={handleInp}
      />
      <br />
      <input type="text" placeholder="Type" name="type" onChange={handleInp} />
      <br />

    </div>
    <div className="btndiv">
      
      <button
        onClick={() => {
          addProduct(product);
          navigate("/");
        }}
        >
        Save
      </button>

        </div>
      </div>
  );
};

export default AddProduct;
