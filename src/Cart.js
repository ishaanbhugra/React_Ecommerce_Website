import React from 'react'
import { useCartContext } from './contextAPI/CartContext'
import CartItems from './components/CartItems'
import { NavLink } from 'react-router-dom'
import FormatPrice from './Helpers/FormatPrice'

const Cart = () => {
  const { totalItem } = useCartContext();
const {cart,clearCart,totalPrice, shippingFee} =useCartContext()
console.log(cart)


if (cart?.length === 0){
  return (
  <h1 style={{textAlign:"center",
  marginBottom: "74.3vh",
}}>YOUR CART IS EMPTY</h1>
  )
}

  return (
    <>
    <h1 style={{textAlign:"center"}}>CART</h1>

    <div style={{textAlign:"center"}}>
    
      <div style={{display:"inline-flex" }}>
        {/* style={{border:'2px solid black'}} border='2px solid black' */}
       
        <div style={{marginRight:"200px"}}>Item</div>
        <div style={{marginRight:"150px"}}>Price</div>
        <div style={{marginRight:"150px"}}>Quantity</div>
        <div style={{marginRight:"200px"}}>Subtotal</div>
        <div style={{marginRight:"150px"}}>Remove</div>
        
        {/* <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p> */}
        
        
    
      </div>
    <hr/>
    <div>
      {
      cart?.map((currentElement)=>{
        return <CartItems key={currentElement.id} {...currentElement}  />
      })
    }
    
    </div>

    </div>

    <hr/> 
    <div style={{marginLeft:"90vw"}}>
      <p><b>TOTAL ITEMS:</b></p>
      <p>{totalItem}</p>
    <p><b>SUBTOTAL:</b></p>
              <p>
                <FormatPrice price={totalPrice} />
              </p>
              <p><b>SHIPPING FEE:</b></p>
              <p>
                <FormatPrice price={shippingFee} />
              </p>
            </div>
            <hr style={{marginLeft:"85vw"}} />
            <div style={{marginLeft:"90vw"}}>
              <p><b>ORDER TOTAL:</b></p>
              <p>
                <FormatPrice price={shippingFee + totalPrice} />
              </p>
              
            </div>
            <hr />
    <div>
      <NavLink to="/products">
        <button className='button' style={{verticalAlign:"middle", width:"220px"}}><span>CONTINUE SHOPPING</span></button>
      </NavLink>
<span  style={{marginRight:"55vw"}}></span>
      <button onClick={clearCart} className='button' style={{backgroundColor:"red"}}><span>CLEAR CART</span></button>
      <NavLink to="/payment">
      <button className='button'><span>PLACE ORDER</span></button>
      </NavLink>
    </div>

</>
  )
}

export default Cart