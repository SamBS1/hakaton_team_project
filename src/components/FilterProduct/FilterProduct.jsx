import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//custom
import { useProducts } from '../../contexts/ProductContextProvider';


export default function RadioButtonsGroup() {
    const { fetchByParams } = useProducts();
  
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={e => fetchByParams("type", e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="sport" control={<Radio />} label="Sport" />
          <FormControlLabel value="clothes" control={<Radio />} label="Clothes" />
          <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
        </RadioGroup>
      </FormControl>
    );
  }





































///////////////////////////////////////////////////////

// const FilterProduct = () => {

//     const { filter } = useProducts();

//     const onFilterValueChanged = (e) =>{
//         // console.log(e.target.value)
//         filter(e.target.value)
//     }

//   return (
//     <div className='category' onChange={onFilterValueChanged}>
//         <select name="drugs">
//             <option value="all">All</option>
//             <option value="drug">Drug</option>
//             <option value="asd">Asd</option>
//         </select>

//     </div>
//   )
// }

// export default FilterProduct
