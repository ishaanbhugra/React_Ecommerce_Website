import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './contextAPI/ProductContext'
import PageNavigation from './components/PageNavigation'
import { Container } from '@mui/material'
import MyImage from './components/MyImage'
import FormatPrice from './Helpers/FormatPrice'
import axios from 'axios'

const SingleProduct = () => {
const [isSingleLoading, setIsSingleLoading] = useState(true);
const [singleProduct, setSingleProduct] = useState({});
const {id} = useParams();

useEffect(()=>{
  //  const myfunc= async()=>{
  //   try {
  //   let {data} = await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`);
  //   setIsSingleLoading(false);
  //   setSingleProduct(data); 
  //   } catch (error) {
      
  //   }
  // }
  // myfunc()

  axios.get(`https://api.pujakaitem.com/api/products?id=${id}`).then(res=>{
  // axios.get(`https://http://localhost:7000/products?id=${id}`).then(res=>{

    setIsSingleLoading(false);
    setSingleProduct(res?.data);
  }).catch(er=>{
    setIsSingleLoading(false);
  })
},[])


if(isSingleLoading){
  return <div>...isSingleLoading</div>
}




const {id: alias, name, company,price, description, category, stock,stars,reviews, images} = singleProduct

  return (
    <>
    <div>SingleProduct</div>
    <h1>{name}</h1>



    <PageNavigation title={name}/>

    {/* <Container> */}
      <div>
        <div>
        <MyImage imgs={images}/>
        </div>
        <div>
          <h2>{name}</h2>
        <p>{stars}</p>
        <p>{reviews} reviews</p>
        <p>
          MRP: <del> <FormatPrice price={price+2000} /> </del>
          DEAL OF THE DAY: <FormatPrice price={price} />
        </p>
        <p>{description}</p>
        <p>FREE DELIVERY</p>
        </div>
      </div>
    {/* </Container> */}
    </>
  )
}

export default SingleProduct