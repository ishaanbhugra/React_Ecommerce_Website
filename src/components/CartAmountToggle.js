import React from 'react'
import { NavLink } from 'react-router-dom'

const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {
  return (
    <>
    {/* <div>CartAmountToggle</div> */}
    <div>
        <div style={{display:"flex",}}>
            <button onClick={()=>{setDecrease()}} style={{marginRight:"10px",marginTop:"0px",height:"50px",width:"50px"}}>-</button>
            <h1 style={{marginRight:"10px",marginTop:"0px", color:"black",backgroundColor:"rgb(198, 253, 255)"}}>{amount}</h1>
            <button onClick={()=>{setIncrease()}} style={{marginRight:"10px",marginTop:"0px",height:"50px",width:"50px"}}>+</button>

        
        </div>
    </div>
    </>
  )
}

export default CartAmountToggle