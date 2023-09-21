import { createContext, useContext, useEffect, useReducer } from "react";
// import { createContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";


const FilterContext = createContext()

const initialState={
    filterProducts:[],
    allProducts:[],
    gridView:true,
    sortingValue:"lowest",
    
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
    },
}

export const FilterContextProvider=({children})=>{

const {products} = useProductContext()

const [state,dispatch]=useReducer(reducer,initialState)


const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW"})
}


const setListView=()=>{ 
    return dispatch({type:"SET_LIST_VIEW"})
}

const sorting=()=>{
    dispatch({type:"GET_SORT_VALUE"})
}

 

const updateFilterValue=(e)=>{
    let name=e.target.name
    let value=e.target.value
    console.log(name,value,":::::::")
    
    return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name,value}})

}
 

useEffect(()=>{
console.log("ijhkjhkjkjkhjk")

dispatch({type:"SORTING_PRODUCTS", payload:products})
// , payload:products
},[products,state.sortingValue])
useEffect(()=>{
dispatch({type:"FILTER_PRODUCTS"})

},[state.filters])

useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
},[products])


    return <FilterContext.Provider value={{...state,setGridView,setListView, sorting,  updateFilterValue}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FilterContext)
}