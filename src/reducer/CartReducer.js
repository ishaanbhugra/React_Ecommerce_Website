 
const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    //         console.log(product)


    let existingProduct = state.cart?.find(
      (currentItem) => currentItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart?.map((currentElement) => {
        if (currentElement.id === id + color) {
          let newAmount = currentElement.amount + amount;

          if (newAmount >= currentElement.max) {
            newAmount = currentElement.max;
          }
          return {
            ...currentElement,
            amount: newAmount,
          };
        } else {
          return currentElement;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } 
    
    else {

    let cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart?.filter(
      (currentItem) => currentItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

if (action.type === "CLEAR_CART"){
  return {
    ...state,
    cart:[],
  }
}



if (action.type === "SET_DECREMENT") {
  let updatedProduct = state.cart.map((currentElement) => {
    if (currentElement.id === action.payload) {
      let decAmount = currentElement.amount - 1;

      if (decAmount <= 1) {
        decAmount = 1;
      }

      return {
        ...currentElement,
        amount: decAmount,
      };
    } else {
      return currentElement;
    }
  });
  return { ...state, cart: updatedProduct };
}

if (action.type === "SET_INCREMENT") {
  let updatedProduct = state.cart.map((currentElement) => {
    if (currentElement.id === action.payload) {
      let incAmount = currentElement.amount + 1;

      if (incAmount >= currentElement.max) {
        incAmount = currentElement.max;
      }

      return {
        ...currentElement,
        amount: incAmount,
      };
    } else {
      return currentElement;
    }
  });
  return { ...state, cart: updatedProduct };
}


 if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, currentElement) => {
      let { amount } = currentElement;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      totalItem: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let totalPrice = state.cart.reduce((initialVal, currentElement) => {
      let { price, amount } = currentElement;

      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      totalPrice,
    };
  }



// if (action.type === "CART_ITEM_PRICE_TOTAL") {
//   let { totalItem, totalPrice } = state.cart?.reduce((accum, currentElement) => {
//       let { price, amount } = currentElement;

//       accum.totalItem += amount;
//       accum.totalPrice += price * amount;

//       return accum;
//     },
//     {
//       totalItem: 0,
//       totalPrice: 0,
//     }
  
//   ) || {};

//   return {
//     ...state,
//     totalItem,
//     totalPrice

//   }
// }

  return state;
};

export default cartReducer;