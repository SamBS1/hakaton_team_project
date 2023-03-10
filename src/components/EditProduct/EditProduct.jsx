import React, {useState, useEffect} from 'react'
import { useProducts } from '../../contexts/ProductContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import '../../styles/EditProduct.css'

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct} = useProducts()

  const [product, setProduct] = useState(productDetails)

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    getProductDetails(id)
  }, [])
  
  useEffect(() => {
    setProduct(productDetails)
  }, [productDetails])

const handleInp = e => {
  if(e.target.name === 'price'){
    let obj = {
      ...product,
      price: Number(e.target.value)
    }
      setProduct(obj)
  }else{
    let obj = {
      ...product,
      [e.target.name]: e.target.value
    }
    setProduct(obj)
  }
  }

  return (

    <div  className='div'>
      {product? (
        <div className='div3'>
        <div className='div2'>
      <p>
        Name:
      <input type="text" placeholder='Title' name='name' onChange={handleInp} value={product.name}/><br/>
      </p>
      
      <p>
        Description:
      <input type="text" placeholder='Description' name='description' onChange={handleInp} value={product.description}/><br/>
      </p>
      <p>
        Price:
      <input type="text" placeholder='Price' name='price' onChange={handleInp} value={product.price}/><br/>
      </p>
      <p>
        Picture:
      <input type="text" placeholder='Picture' name='picture' onChange={handleInp} value={product.picture}/><br/>
      </p>
      <p>
        Type:
      <input type="text" placeholder='Type' name='type' onChange={handleInp} value={product.type}/><br/>
      </p>

    </div>
    <div className='btndiv'>
      <button onClick={() => {
        saveEditedProduct(product) 
        navigate('/products')
      }}>
        Save Changes
      </button>
        </div>
        </div>
      ):(
        <h3>loading...</h3>
      )}
    </div>

    
  )
}

export default EditProduct