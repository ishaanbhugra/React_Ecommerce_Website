// import React from 'react'


import * as React from 'react';


import styled from "styled-components";
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import { useFilterContext } from './contextAPI/FilterContext';






const Products = () => {

// const {filterProducts} =useFilterContext()
// console.log(filterProducts)
  return (
    <>
    <h1 style={{textAlign:"center"}}>SHOP NOW</h1>

<Wrapper>
<div className="container grid grid-filter-column"
style={{paddingLeft: "0",
  paddingRight: "0",
  marginLeft: "0",
  marginRight: "0",
  maxWidth:"100vw",
  }}
>
        <div> 
          <FilterSection/>
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
            </div>

            <div className="main-product">
              <ProductList />
            </div>
          </section>
      </div>
      </Wrapper>



    </>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }`;

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Products