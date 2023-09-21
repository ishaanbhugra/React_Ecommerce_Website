import React, { useContext } from 'react'
// import { styled } from 'styled-components'
import HeroSection from './components/HeroSection';
import { AppContext } from './contextAPI/ProductContext';
import FeatureProducts from './components/FeatureProducts';

const Home = () => {


// const myName= useContext(AppContext)


  const data={
    name:"ISHAAN ONLINE STORE",
  }


  return (
    // <Wrapper className='test'>Home</Wrapper>
    <>
    
    {/* {myName} */}
    
    <HeroSection mydata={data}/>{" "}
    <FeatureProducts/>
    </>
  )
}

// const Wrapper= styled.section`
  
//   background-color: ${({theme})=> theme.colors.bg};
//   height: 20rem;
//   width: 20rem;
//   `;

export default Home


