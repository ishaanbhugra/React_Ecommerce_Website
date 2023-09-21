import React from 'react'
import FormatPrice from "../Helpers/FormatPrice"
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../contextAPI/CartContext'

const CartItems = ({ id, name, image, color, price, amount }) => {

    const { removeItem, setDecrease, setIncrease } = useCartContext()

    // const setIncrease=()=>{
    //     amount<stock    ?   setAmount(amount+1)    : setAmount(stock)
    // }
    // const setDecrease=()=>{
    //     amount>1   ?   setAmount(amount-1)    : setAmount(1)
    // }

    return (
        <>
            {/* <div>CartItems</div> */}
            <div style={{  display: "inline-flex"}}>
                {/* <tr> */}
                
                    {/* <td style={{marginRight:"100px"}}> */}
                    <div style={{marginRight:"100px", }}>
                        <div>
                            <figure>
                                <img style={{ height: "50px", width: "50px" }} src={image} alt='' />
                            </figure>
                        </div>
                        <div>
                            <p style={{textAlign:"center"}}>{name}</p>
                            <div>
                                <p>Color: <p style={{
                                    background: color,
                                    color: color,
                                    width: "20px",
                                    height: "20px",
                                    mozBorderRadius: "50px",
                                    webkitBorderRadius: "50px",
                                    borderRadius: "50px",
                                }}>
</p>
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* </td> */}

                    {/* <td style={{marginRight:"100px"}}> */}
                    <div style={{marginRight:"100px",}}>
                        <p>
                            <FormatPrice price={price} />
                        </p>
                    </div>
                    {/* </td> */}

                    {/* <td style={{marginRight:"100px"}}> */}
                    <div style={{marginRight:"100px",}}>
                        <CartAmountToggle
                            setDecrease={()=>setDecrease(id)}
                            amount={amount}
                            setIncrease={()=>setIncrease(id)}
                        />
                    </div>
                    {/* </td> */}


                    {/* <td style={{marginRight:"100px"}}> */}
                    <div style={{marginRight:"100px"}}> 
                        <p>
                            <FormatPrice price={price * amount} />
                        </p>
                    </div>
                    {/* </td> */}


                    {/* <td style={{marginRight:"100px"}}> */}
                    <div style={{marginRight:"100px",}}>
                        <FaTrash onClick={() => removeItem(id)} />
                    </div>
                    
                    {/* </td> */}


                

                {/* </tr> */}
                {/* </table> */}
            </div>
            <hr style={{width:"80vw", margin:"auto"}}/>
        </>
    )
}

export default CartItems