import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import { Pagination } from '@mui/material';
import ProductList from '../../styles/ProductList.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ProductsList = ({changeSideBarStatus, page, setPage}) =>  {
  const { products, getProducts } = useProducts();


  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 5

  const count = Math.ceil(products.length / itemsOnPage)

  const handlePage = (e, p) => {
    setPage(p)
  }

  function currentData() {
    const begin = (page - 1 ) * itemsOnPage
    const end = begin + itemsOnPage
    return products.slice(begin, end)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      }
    }
  });

  return (
    <div>
        <div className='div-list'>
          {/* <button onClick={changeSideBarStatus}>Filter & Search</button> */}

          {products? (
            currentData().map(item => (
              <ProductCard key={item.id} item={item} />
              ))
              ):(
                  <h3>Loading...</h3>
                  )}
        </div>
        <ThemeProvider theme={theme}>
            <Pagination count={count} page={page} onChange={handlePage} className='pagination' color="primary"/>
        </ThemeProvider>
    </div>
  )
}

export default ProductsList


