import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const HeroSection = ({mydata}) => {

const {name}=mydata




  return (
    <Wrapper>
<div style={{display:'flex', }}>
    <div className='intro'>

    <h1 style={{marginTop: "0px", textAlign:"center"}}>WELCOME TO {name}</h1>
    <p>Welcome to our online retail paradise, where shopping becomes an unforgettable adventure. Dive into a world of convenience and choice as we bring you the finest products curated just for you. From fashion-forward apparel that will have you turning heads to innovative gadgets that make life a breeze, we've got it all. Join our community of savvy shoppers and experience the thrill of seamless online shopping. Unleash your desires, shop with confidence, and let us elevate your online retail experience to new heights. Discover, indulge, and redefine the way you shop, because here, it's not just a transaction – it's an experience.</p>


<div style={{display:"flex", justifyContent:"center"}}>
    <NavLink to="/products">
        <button class="button" style={{verticalAlign:"middle"}}><span>SHOP NOW !!!</span></button>
    </NavLink>
    <br/>
    <NavLink to="/productentry">
        <button class="button" style={{verticalAlign:"middle", backgroundColor: "grey"}}><span>SELL NOW !!!</span></button>
    </NavLink>
    </div>
    </div>
    <div>
        <img style={{height:"250px",width:"350px",zIndex:"1",position:"relative"}}src='./img/shopping.jpg' alt=''></img>
        </div>
        </div>


    </Wrapper>
  )
}


const Wrapper=styled.section``;



export default HeroSection