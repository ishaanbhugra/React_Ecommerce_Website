import { createContext, useContext, useReducer } from "react";

import reducer from "../reducer/LoginReducer"


const LoginContext = createContext()

const initialState = {
    loggedin: false,
}

const LoginContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const setLoggedIn = () => {
        dispatch({ type: "SET_LOGGED_IN" })
    }


    const setLoggedOut= () => {
        dispatch({ type: "SET_LOGGED_OUT" })
    }

    return <LoginContext.Provider value={{ ...state, setLoggedIn,setLoggedOut }}>
        {children}
    </LoginContext.Provider>
}




const useLoginContext = () => {
    return useContext(LoginContext)
}

export { LoginContextProvider, useLoginContext }