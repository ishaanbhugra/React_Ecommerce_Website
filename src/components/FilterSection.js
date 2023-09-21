import React from 'react'
import { useFilterContext } from '../contextAPI/FilterContext'
import { FaCheck } from 'react-icons/fa'

const FilterSection = () => {

const {filters:{text,category,color}, 
      updateFilterValue,
    allProducts}=useFilterContext()

const getUniqueData=(data,property)=>{
  let newValue=data?.map((currentElement)=>{
    return currentElement[property]
  })

  if (property === "colors") {
    return (newValue= ["All", ...new Set([].concat(...newValue))])
    // newValue = newValue.flat();
  }else{
// console.log("newVal",newValue)
return (newValue=["All", ...new Set(newValue)])
// console.log("uniqueVal",newValue)
  }
}


const categoryData= getUniqueData(allProducts, "category")
const companyData= getUniqueData(allProducts, "company")
const colorsData= getUniqueData(allProducts, "colors")

// console.log(colorsData)


  return (
    <>
    <h5 style={{textAlign:"center", textDecoration:"underline"}}>FILTERS</h5>
    <br/>
<div style={{display:"flex", justifyContent:"space-between", margin:"0px 20px 0px 20px"}}>

<div>
  {/* <form onSubmit={(e)=>e.preventDefault()}>
    <input type='text' 
    value={text} 
    name='text' 
    onChange={updateFilterValue}
    placeholder="Search"
    />

  </form> */}
  <h3 style={{maxWidth:"max-content", backgroundColor:"darkblue"}}>Search</h3>
  <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
</div>

<br/>



<div>
  <h3 style={{maxWidth:"max-content", backgroundColor:"darkblue"}}>Category</h3>
  <div>
    {
      categoryData?.map((currentElement,index)=>{
        return <button
        key={index}
        type='button'
        name='category'
        value={currentElement}
        onClick={updateFilterValue}
        // className={currentElement === category ? "active" : ""}
        style={{marginRight:"10px"}}
        >
          {currentElement}
        </button>
      })
    }
  </div>
</div>

<br/>

<div>
  <h3 style={{maxWidth:"max-content", backgroundColor:"darkblue"}}>Company</h3>
  <div>
    <form action='#'>
      <select
      name='company'
      id='company'
      onClick={updateFilterValue}
      >
          {
            companyData?.map((currentElement,index)=>{
              return (
                <option value={currentElement} name='company' key={index}>
                  {currentElement}
                </option>
              )
            })
          }
      </select>
    </form>
  </div>
</div>

<br/>



<div>
        <h3 style={{maxWidth:"max-content", backgroundColor:"darkblue"}}>Colors</h3>
        <div>
          {colorsData?.map((currentColor, index) => {

            if(currentColor==="All"){
              return (<button
                key={index}
                type="button"
                value={currentColor}
                name="color"
                // style={{  height:"20px",width:"20px" }}
                onClick={updateFilterValue}>
                All
              </button>)
            }
            else{
            return (
              <button
                key={index}
                type="button"
                value={currentColor}
                name="color"
                style={{ backgroundColor: currentColor ,height:"30px",width:"30px",margin:"10px" }}
                onClick={updateFilterValue}>
                {color === currentColor ? <FaCheck style={{color:"white"}}/> : null}
              </button>
            );
            }
          })}
          
        </div>
      </div>
      </div>
    </>
  )
}

export default FilterSection