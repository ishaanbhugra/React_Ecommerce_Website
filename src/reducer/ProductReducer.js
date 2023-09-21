

const ProductReducer = (state,action) => {

if(action.type === "SET_LOADING"){
    return {
        ...state,
        isLoading:true,
    }
}



if(action.type === "SET_API_DATA"){
    const featuredData=action.payload.filter((currentElement)=>{
        return currentElement.featured === true
    })

    return {
        ...state,
        isLoading:false,
        products:action.payload,
        featureProducts:featuredData,
    }
}



if(action.type === "API_ERROR"){
    return{
        ...state,
        isLoading:false,
        isError:true,
    }
}



if(action.type==="SET_SINGLE_LOADING"){
    return{
        ...state,
        isSingleLoading:true
    }
}



if(action.type==="SET_SINGLE_PRODUCT"){
    return{
        ...state,
        isSingleLoading:false,
        SingleProduct:action.payload,
    }
}



if(action.type === "SET_SINGLE_ERROR"){
    return{
        ...state,
        isSingleLoading:false,
        isError:true,
    }
}


    return state;
  
}

export default ProductReducer