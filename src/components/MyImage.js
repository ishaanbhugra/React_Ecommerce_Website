import React, { useEffect, useState } from 'react'

const MyImage = ({imgs=[{url:""}]}) => {

  // console.log("imgs",imgs, typeof imgs)

const [mainImage,setMainImage]=useState(imgs[0])


  return (
    <>
    {/* <div>MyImage</div> */}
<div style={{display:"flex"}}>
    <div>
      {
       imgs.map((currentElement,index)=>{
          return(
            <figure>
              <img style={{height:"100px",width:"100px"}} src={currentElement.url} alt=''
              key={index}
              onMouseOver={()=>{setMainImage(currentElement)}}
              />
            </figure>
          )
        })
      }
    </div>
    <div>
      <img style={{height:"500px",width:"500px", marginLeft:"10px"}} src={mainImage.url} alt=''/>
    </div>
    </div>
    </>
  )
}

export default MyImage