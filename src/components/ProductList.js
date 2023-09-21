import React from 'react'
import { useFilterContext } from '../contextAPI/FilterContext'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

    const {filterProducts,gridView}=useFilterContext()

if(gridView===true){
   return <GridView products={filterProducts}/>
}

if(gridView===false){
    return  <ListView products={filterProducts}/>
}

  return (
    <>
    <div>ProductList</div>



    </>
  )
}

export default ProductList