import React, { useState } from "react";
import ProductsList from "../components/ProductList/ProductList";
// import ProductSideBar from '../components/products/ProductSideBar/ProductSideBar'
import "../styles/ProductsPage.css";
import "../components/ProductSearch/ProductSearch";
const ProductsPage = () => {
  // const [isSideBar, setIsSideBar] = useState(true);
  const [page, setPage] = useState(1);

  // function changeSideBarStatus({changeSideBarStatus}){
  //   setIsSideBar(!setIsSideBar)
  // }

  return (
    <div className="productsPage">
      {/* <ProductSideBar isSideBar={isSideBar} setPage={setPage}/> */}
      <ProductsList page={page} setPage={setPage} />
    </div>
  );
};

export default ProductsPage;
