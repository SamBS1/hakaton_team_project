import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";

// npm install @mui/material @emotion/react @emotion/styled
//custom
import { useCart } from "../../contexts/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import '../../styles/Cart.css'
import Box from '@mui/material/Box';  
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
  useCart();
  
  

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Sub Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.item.picture} alt="erroe:(" width="50" />
              </TableCell>
              <TableCell align="center">{row.item.name}</TableCell>
              <TableCell align="center">{row.item.type}</TableCell>
              <TableCell align="center">{row.item.price}</TableCell>
              <TableCell align="center">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </TableCell>
              <TableCell align="center">{row.subPrice}</TableCell>
              <TableCell align="center">
                <button onClick={() => deleteProductFromCart(row.item.id)}>
                  <ClearTwoToneIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" components="div">
        Total Price: {cart?.totalPrice}
        <Button onClick={handleOpen} className="btn-modal">BUY NOW</Button>
      </Typography>
      <div className="Modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        <p>
          Name on card: 
      <input type="text" placeholder='John Doe' name='name' /><br/>
        </p>
      
      <p>
        Credit card number: 
      <input type="number" placeholder='1111-2222-3333-4444' name='description' /><br/>
      </p>
      <p>
        Exp Date: 
      <input type="number" placeholder='01/01' name='price' />
      </p>
      <p>
        CVV: 
      <input type="number" placeholder='123' name='price' /> 
      </p>
      <br/>
      <button>Continue</button>

          </Typography>
        </Box>
      </Modal>
        </div>
    </TableContainer>
  );
}
