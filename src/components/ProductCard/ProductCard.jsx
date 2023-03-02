import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import '../../../styles/ProductCard.css'
// import { useCart } from '../../../contexts/CartContextProvider';
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import IconButton from '@mui/material/IconButton';
// import { makeStyles } from '@material-ui/core/styles'
import '../../styles/ProductCard.css'


const ProductCard = ({ item, checkProductInCart }) => {
  const navigate = useNavigate()
  const { deleteProduct } = useProducts()
//   const { addProductToCart } = useCart()

  return (
    <div className='Container'>

    <div className='card-div'>
      <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">

  
      <Card sx={{ maxWidth: 345 }} className="post-card">
          <CardMedia
            sx={{ height: 140 }}
            image={item.picture}
            className='post-pic'/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>BTC: </b> {item.price} <br/>

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>Details</Button>
            <Button size="small"onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
            <Button size="small"onClick={() => deleteProduct(item.id)}>Delete</Button>
            {/* <IconButton size='small' onClick={() => addProductToCart(item)}>
                <AddShoppingCartOutlinedIcon color={checkProductInCart(item.id)? 'primary':''}/>
            </IconButton> */}
          </CardActions>
        </Card>
 
            </Grid>
    </div>
            </div>
  )
}

export default ProductCard