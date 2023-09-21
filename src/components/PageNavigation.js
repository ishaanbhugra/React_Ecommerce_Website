import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    // <div>PageNavigation</div>
    <>
    <NavLink to="/">HOME</NavLink>/{title}
    </>
  )
}

export default PageNavigation