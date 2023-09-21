import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'

const Product = (currentElement) => {

const {id, name, image , price, category} = currentElement

  return (
    // <div>Product</div>
    <NavLink to={`/singleproduct/${id}`}  >

    <div style={{display:"inline-flex", border:"2px solid black",margin:"20px", backgroundColor:"white"}}>
<figure style={{marginRight:"0px"}}>
    <img src={image} alt={name} style={{height:"250px", width:"250px",border:"2px solid red"}}/>
    <figcaption style={{color:"blue", textAlign:"center"}}>{category}</figcaption>
</figure>

<div style={{margin:"10px"}}>
    <div>
        <h3>{name}</h3>
        <p><FormatPrice price={price} /></p>
        </div>
        </div>
    </div>
    </NavLink>
  )
}

export default Product