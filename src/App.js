import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./pages/Footer";
import CartContextProvider from "./contexts/CartContextProvider";
const App = () => {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
