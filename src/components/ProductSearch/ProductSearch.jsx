import React, { useState, useEffect } from "react";
import axios from "axios";
import { JSON_API_PRODUCTS } from "../../helpers/consts";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductSearch = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  //     const [products, setProducts] = useState([])
  //     const [allData,setAllData] = useState(products);

  //     useEffect(() => {
  //         axios(JSON_API_PRODUCTS)
  // .then(response => {
  // console.log(response.data)
  // setProducts(response.data);
  // setAllData(response.data);
  // })
  // .catch(error => {
  // console.log('Error getting fake data: ' + error);
  // })
  // }, []);

  return (
    <div className="sideBar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default ProductSearch;
