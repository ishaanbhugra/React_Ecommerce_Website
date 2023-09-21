import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './contextAPI/ProductContext'
import PageNavigation from './components/PageNavigation'
import { Container } from '@mui/material'
import MyImage from './components/MyImage'
import FormatPrice from './Helpers/FormatPrice'
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from './components/Star'
import AddToCart from './components/AddToCart'
const SingleProduct = () => {

const {getSingleProduct,isSingleLoading,SingleProduct} = useProductContext()

const {id} = useParams()

useEffect(()=>{
  getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`)
  // getSingleProduct(`http://localhost:7000/products?id=${id}`)

},[])


if(isSingleLoading){
  return <div>...isSingleLoading</div>
}




const {id: alias, name, company,price, description, category, stock,stars,reviews, image} = SingleProduct
console.log(image,";;;das")
  return (
    <>
    {/* <div>SingleProduct</div> */}
    



    <h1><PageNavigation title={name}/></h1>

    {/* <Container> */}
      <div style={{display:"flex"}}>
        <div style={{width:"50vw", marginLeft:"50px"}}>
        <MyImage imgs={image}/>
        </div>

        <div style={{width:"50vw", marginRight:"50px"}}>
        <h1 style={{backgroundColor:"steelblue",textAlign:"center",color:"black", borderRadius:"50px"}}>{name}</h1>
          {/* <h1>{alias}</h1> */}
          {/* <h2>{name}</h2> */}
          <h3 style={{backgroundColor:"	lightseagreen",textAlign:"center",color:"black", borderRadius:"50px"}}>Company: {company}</h3>
          <h3 style={{backgroundColor:"	lightseagreen",textAlign:"center",color:"black", borderRadius:"50px"}}>Category: {category}</h3>

          <Star stars={stars} reviews={reviews} />
        {/* <p>{stars} stars</p> */}
        {/* <p>{reviews} reviews</p> */}
        <p>
          <b>MRP:</b> <del> <FormatPrice price={price+200000} /> </del>
          </p>
          <p style={{backgroundColor:"darkorange"}}>
            <marquee>         
          <b>DEAL OF THE DAY: </b><FormatPrice price={price} />
          </marquee>
        </p>
       
        <p>{description}</p>
        <hr/>
        <div style={{display:"flex"}}>
        <p><TbTruckDelivery/>   FREE DELIVERY</p>
        <p><TbReplace/>   15 days easy return and exchange</p>
        <p><MdSecurity/>    1 year warranty</p>
        </div>
        <hr/>
        <div style={{display:"flex"}}>
        <p style={{color:"red"}}>Quantity Left: {stock}</p>
        <p>Availability: {stock>0 ? "IN STOCK":"OUT OF STOCK"}</p>
        </div>
        <hr/>
        
      
{stock>0 && <AddToCart product={SingleProduct} />}
</div>

      </div>
    {/* </Container> */}
    </>
  )
}

export default SingleProduct