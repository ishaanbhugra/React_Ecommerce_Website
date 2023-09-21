import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{textAlign:"center", border:"4px solid red", width:"80vw",margin:"auto"}}>
      <h1>404 NOT FOUND</h1>
      <NavLink to='/' >REDIRECT TO WEBSITE</NavLink>
    </div>
  )
}

export default ErrorPage