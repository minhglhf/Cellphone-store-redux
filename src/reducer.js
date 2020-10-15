import {
  // DECREASE,
  // INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  ADD_TO_LIST
} from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: [],
  total: 0,
  amount: 0
};

const reducer = (state = initialStore, action) => {
  
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
    };
  }
  if (action.type === GET_TOTALS) {

    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {

    let temp = { ...state.cart };
    // state.cart.find(x => x.id === action.payload.id) ? (
    temp = {
      ...state,
      cart: state.cart.map(cartItem => {

        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {

            // console.log(state.cart.length);
            // if(state.cart.length === 0) console.log('empty');
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      })
    }
    //   console.log('enot bitch')
    // ) : (
    //   console.log('dcmm')
    // );

    return temp;
  }

  if (action.type === ADD_TO_LIST) {
    if (!state.cart.find(x => x.id === action.payload.id)) {



      state.cart.push(cartItems.find(x => x.id === action.payload.id));
     
      console.log(state.cart);
      return ({
          ...state,
          cart: state.cart
        });
    }
  }
  return state;
}

export default reducer;
