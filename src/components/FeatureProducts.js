import React from 'react'

import { useProductContext } from "../contextAPI/ProductContext"
import Product from './Product'


const FeatureProducts = () => {


    const { isLoading, featureProducts} = useProductContext()

    console.log("featureProducts",featureProducts)
    
    if(isLoading){
        return <div>IS LOADING.....</div>
    }


  return (
    // <div>FeatureProducts</div>
    <>
    
    <div>
        {/* <div>CHECK NOW !!!</div>     */}
        <h2 style={{marginTop: "0px"}}>SOME FEATURED PRODUCTS</h2>
        <div>
            {
                featureProducts.map((currentElement)=>{
                    return <Product key={currentElement.id} {...currentElement} />
                })
            }
        </div>
    </div>
    
    </>
  )
}

export default FeatureProducts