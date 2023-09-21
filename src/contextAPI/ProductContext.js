// CREATE A CONTEXT
// PROVIDER
// CONSUMER

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products"
// const API = "http://localhost:7000/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],

    isSingleLoading: false,
    SingleProduct: {},

}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            console.log("apidata stored in res", res)

            const products = await res.data
            console.log("products array fetch from res", products)

            dispatch({ type: "SET_API_DATA", payload: products }) //payload--which data is required
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }
    // second API CALL

    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url)
            const SingleProduct = await res.data
console.log(SingleProduct,"fsadfsdafas")
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct})
                                                                        //?.length ? SingleProduct[0] : {} 
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }

    useEffect(() => { //runs on loading the page
        getProducts(API)
    }, [])

    // useEffect(()=>{
    //     getSingleProduct(API2)
    // },[])



    return (
        <div>
            <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
            {/* "ishaan" */}
        </div>
    )
}


// CUSTOM HOOKS

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };


// https://api.pujakaitem.com/api/products?id=thapaserialnoe