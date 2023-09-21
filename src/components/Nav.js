import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../contextAPI/CartContext';
import { useFilterContext } from '../contextAPI/FilterContext';
import { useLoginContext } from '../contextAPI/LoginContext';


const Nav = () => {

    const { totalItem } = useCartContext();
    
    const {loggedin} = useLoginContext()
    const {setLoggedOut}=useLoginContext()
    // console.log(loggedin,"jhbcfjk")
    React.useEffect(()=>{
        
        console.log("test", loggedin)
    },[loggedin])

    // const logout=(loggedin)=>{
    //     loggedin:false
    // }
  return (  
    
    // <div>Nav</div>
    <nav style={{height:"60px"}}>
        <div className="navbar"style={{height:"60px"}}>
            <ul className="navbar-lists">
                {/* <li>
                
    <NavLink to='/' className='navbar-link' >
        <img src='./img/logoo.png' alt='logo img'/>
    </NavLink>
    
                </li> */}
                <li>
                    <NavLink to='/' className='navbar-link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='navbar-link'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className='navbar-link'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='navbar-link'>Contact</NavLink>
                </li>
                <li>
                    {!loggedin && <NavLink to='/login' className='navbar-link'>LOGIN/SIGNUP</NavLink>}
                </li>
                <li>
                    <NavLink to='/cart' className='navbar-link'>CART
                    <FiShoppingCart className='cart-trolley'/>-
                    <span style={{border:'1px solid blue',borderRadius:"100px"}}>{totalItem} </span>
                    </NavLink>
                </li>
                <li>
                    {loggedin && <button disabled style={{backgroundColor:"green",color:"white"}}>
                        LOGGED IN
                        {/* {loggedin?.toString()} */}
                        
                    </button>}
                    {!loggedin && <button disabled style={{backgroundColor:"red",color:"black"}}>
                    NOT LOGGED IN
                    </button>}
                   
                    
                </li>
                <li>
                {loggedin && <NavLink to='/login'>
                    <button  style={{backgroundColor:"red"}} 
                    onClick={setLoggedOut}
                    // disabled={!loggedin}
                    >
                        LOGOUT 
                        {/* {loggedin?.toString()} */}
                    </button>
                    </NavLink>}
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Nav