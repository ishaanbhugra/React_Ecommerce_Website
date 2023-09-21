import { CheckBox } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'

const ProductEntry = () => {
  return (
  <>
    <h1>Product Entry Form</h1>


<form style={{margin:"10px"}}>
    <TextField
    placeholder='category'
    required
    />
<br/><br/>
<TextField
    required
    placeholder='colors'
    />
<br/><br/>

<TextField
    required
    placeholder='company'
    />
<br/><br/>


<TextField
    required
    placeholder='description'
    />
<br/><br/>
<FormControl>
  <FormLabel >Featured Product</FormLabel>
  <RadioGroup aria-label="featured" name="featured">
    <FormControlLabel value="yes" control={<Radio />} label="yes" />
    <FormControlLabel value="no" control={<Radio />} label="no" />

  </RadioGroup>
</FormControl>

<br/><br/>

<TextField
    required
    placeholder='id'
    />
<br/><br/>

<TextField
    required
    placeholder='image-link'
    />
<br/><br/>

<TextField
    required
    placeholder='Name of Product'
    />
<br/><br/>

<TextField
    required
    placeholder='price'
    />
    <br/><br/>  
<FormControlLabel
    control={<Checkbox checked />}
label="Agree to Seller T&C of Ishaan Online Store"
/>  
        <br/><br/>
<button type='submit'>SUBMIT</button>
    </form>



    </>
  )
}

export default ProductEntry