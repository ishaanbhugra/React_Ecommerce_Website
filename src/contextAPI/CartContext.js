import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext()

const getCartData = () => {
    let cartData = localStorage.getItem("mycart")

    if (!cartData || cartData === [] || cartData === 'null') {
        return []
    }

    else {
        return JSON.parse(cartData)
    }
}


const initialState = {
    // cart: [],
    cart: getCartData(),
    totalItem: "",
    totalPrice: "",
    // totalAmount:"",
    shippingFee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, product, amount) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, product, amount } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }




    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };


    useEffect(() => {

        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });


        localStorage.setItem("mycart", JSON.stringify(state.cart));
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }