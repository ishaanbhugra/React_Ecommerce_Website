import React from 'react'
import FormatPrice from './Helpers/FormatPrice'
import { useCartContext } from './contextAPI/CartContext'
import { NavLink } from 'react-router-dom'

const Payment = () => {
    const {totalPrice, shippingFee} =useCartContext()
  return (
    <>
    <h1 style={{textAlign:"center"}}>PAYMENT GATEWAY</h1>
    <br/>
    <h4 style={{textAlign:"center"}}>MAKE PAYMENT OF <FormatPrice price={shippingFee + totalPrice} /> BY SCANNING THE QR CODE GIVEN BELOW</h4>
    <br/><br/>
    <figure>
        <img alt='' src='./img/paymentqrcode.jpg' style={{height:"300px",width:"300px", display:"block",margin:"auto",}} />
    </figure>
    <br/><br/>

    <NavLink to="/paymentsuccessful">
    <div style={{textAlign:"center"}}>
    <button className='button' ><span>NEXT</span></button>
    </div>
    </NavLink>
    </>
  )
}

export default Payment