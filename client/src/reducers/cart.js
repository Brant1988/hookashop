// action types

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY";
export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";
export const GET_TOTALS = "GET_TOTALS";

// initial state

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  cartTotalPrice: 0,
};

// reducer

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };
    case ADD_TO_CART:
      const isInCart = state.cart.find((product) => product.id === payload.id);
      return {
        ...state,
        cart: !isInCart
          ? [...state.cart, { ...payload, amount: 1 }]
          : state.cart.map((product) => ({
              ...product,
              amount:
                product.id === payload.id ? product.amount + 1 : product.amount,
            })),
      };
    case INCREASE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((product) => ({
          ...product,
          amount:
            product.id === payload.id ? product.amount + 1 : product.amount,
        })),
      };
    case DECREASE_AMOUNT:
      const currentProduct = state.cart.find(
        (product) => product.id === payload.id
      );
      return {
        ...state,
        cart:
          currentProduct.amount === 1
            ? state.cart.filter((product) => product.id !== payload.id)
            : state.cart.map((product) => ({
                ...product,
                amount:
                  product.id === payload.id
                    ? product.amount - 1
                    : product.amount,
              })),
      };
    case GET_TOTALS:
      let { totalPrice, totalAmount } = state.cart.reduce(
        (cartTotal, cartProduct) => {
          const { price, amount } = cartProduct;
          const itemTotal = price * amount;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalAmount += amount;

          return cartTotal;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );

      return {
        ...state,
        cartTotalAmount: totalAmount,
        cartTotalPrice: totalPrice,
      };
    default:
      return state;
  }
};
// localStorage.clear();

// actions

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};

export const increaseAmount = (productId) => {
  return {
    type: INCREASE_AMOUNT,
    payload: {
      id: productId,
    },
  };
};

export const decreaseAmount = (productId) => {
  return {
    type: DECREASE_AMOUNT,
    payload: {
      id: productId,
    },
  };
};

export const getTotals = () => {
  return {
    type: GET_TOTALS,
  };
};
