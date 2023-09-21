import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../contextAPI/CartContext'
import { NavLink } from 'react-router-dom'

const AddToCart = ({product}) => {

    const {addToCart}=useCartContext()
const {id,colors,stock}=product
const [color,setColor]=useState(colors[0])

const [amount,setAmount]=useState(1)
const setIncrease=()=>{
    amount<stock    ?   setAmount(amount+1)    : setAmount(stock)
}
const setDecrease=()=>{
    amount>1   ?   setAmount(amount-1)    : setAmount(1)
}

  return (
    <>

    <div style={{display:"flex"}}>
    {/* <div>AddToCart</div> */}
    
    {/* COLORS */}
    <div>
        <p>
            <b>COLORS:</b>
            {
                colors.map((currentColor,index)=>{

                    return(
                        <button key={index} 
                        style={{backgroundColor:currentColor,height:"30px",width:"30px",margin:"10px"}}
                        onClick={()=>{setColor(currentColor)}}
                        >
                            {color===currentColor?<FaCheck style={{color:"white"}}/>:null}
                            
                        </button>

                    )
                })
            }
        </p>
    </div>


    {/* ADD TO CART */}
    <CartAmountToggle 
    amount={amount}
    setDecrease={setDecrease}
    setIncrease={setIncrease}
    />
    </div>

    <NavLink to="/cart" 
        onClick={()=>addToCart(id,color,product,amount)}
        >
            <button className='button' style={{verticalAlign:"middle", backgroundColor: "steelblue"}}><span>ADD TO CART</span></button>
        </NavLink>

        
    </>
  )
}

export default AddToCart