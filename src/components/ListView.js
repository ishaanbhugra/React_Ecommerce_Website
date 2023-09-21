import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
  <>
    {/* <div>ListView</div> */}
 

    <div style={{border:"2px solid black", margin:"auto", maxWidth:"90vw"}}>
{
products.map((currentElement)=>{
  const { id, name, image, price, description } = currentElement;

  return <div style={{border:"2px solid black", display:"flex", margin:"20px"}}>
<figure>
  <img src={image} style={{height:"200px", width:"300px",margin:"10px 0px 0px 10px"}} alt=''></img>
</figure>

<div>
  <h3 style={{width:"max-content", margin:"10px 0px 0px 10px"}}  >{name}</h3>
  <p>
    <FormatPrice price={price}/>
  </p>
  <p>{description.slice(0,140)}....</p>

  <NavLink to={`/singleproduct/${id}`}>
    <button className='button '>
      <span>
      SHOW MORE
      </span>
    </button>
  </NavLink>
</div>
  </div>
})
}
</div>

    </>
  )
}

export default ListView