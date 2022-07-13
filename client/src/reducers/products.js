import axios from "axios";

// action types

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_ATTEMPT = "FETCH_PRODUCTS_ATTEMPT";

// initial state

const initialState = {
  // userIsAuth: false,
  // userShoppingCart: [],
  isLoading: false,
  data: [],
};

// reducer

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_ATTEMPT:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS:
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};

// actions

export const fetchProducts = (category) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_ATTEMPT });
    const response = await axios.get("http://localhost:5000/product", {
      params: { categoryId: category },
    });
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};
