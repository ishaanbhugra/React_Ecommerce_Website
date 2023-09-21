const LoginReducer=(state,action)=>{

    if(action.type==="SET_LOGGED_IN"){
        return{
            ...state,
            loggedin:true,
        }
    }


    if(action.type==="SET_LOGGED_OUT"){
        return{
            ...state,
            loggedin:false,
        }
    }

    return state
}

export default LoginReducer