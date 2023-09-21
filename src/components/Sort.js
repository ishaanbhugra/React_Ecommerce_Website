import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../contextAPI/FilterContext';
import styled from "styled-components";

const Sort = () => {

const {gridView,setGridView,setListView, filterProducts, sorting} = useFilterContext()

  return (<>
    <br/>
  
   <h5 style={{textAlign:"center", textDecoration:"underline"}}>SORT</h5>
    <Wrapper>
    {/* <div>Sort</div> */}


<div>
  <button className={gridView ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
  <BsFillGridFill />
  </button>
  <button className={!gridView ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
    <BsList />
  </button>
</div>



<div>
  <p>
    {filterProducts.length} Products Available
  </p>
</div>



<div>
  <form>
    <label></label>
      <select onClick={sorting} id='sort'>
        <option value="lowest">Price(Low to High)</option>
        <option value="highest">Price(High to Low)</option>
        <option value="a-z">Name(A to Z)</option>
        <option value="z-a">Name(Z to A)</option>
      </select>
  </form>
</div>

    </Wrapper>
    </>
  )
}


const Wrapper = styled.section`

display: flex;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

.active {
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
}

.sort-btn {
  padding: 1rem 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
}`
export default Sort