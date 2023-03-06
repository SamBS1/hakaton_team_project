import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//custom
import { useProducts } from '../../contexts/ProductContextProvider';

export default function RadioButtonsGroup() {
const {fetchByParams} = useProducts()
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={e => fetchByParams('type')}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="drugs" control={<Radio />} label="Sport" />
        <FormControlLabel value="guns" control={<Radio />} label="Clothes" />
        <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
      </RadioGroup>
    </FormControl>
  );
}

