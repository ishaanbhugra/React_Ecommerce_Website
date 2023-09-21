import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <>
    {/* <div>Header</div> */}
    {/* <MainHeader> */}
    <div style={{ display:"flex", backgroundColor:"pink"}}>
    <NavLink to='/'>
        <img src='./img/logoo.png' alt='logo img'/>
    </NavLink>
    <Nav/>
    </div>
    {/* </MainHeader> */}
    </>
  )
}

export default Header