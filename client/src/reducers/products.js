import axios from "axios";

// action types
export const FETCH_BRANDS = "FETCH_BRANDS";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_ATTEMPT = "FETCH_PRODUCTS_ATTEMPT";

// initial state

const initialState = {
  isLoading: false,
  products: [],
  brands: [],
};

// reducer

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_ATTEMPT:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload.rows,
        isLoading: false,
      };
    case FETCH_BRANDS:
      return { ...state, brands: payload.data, isLoading: false };
    default:
      return state;
  }
};

// actions

export const fetchProducts = (params = {}) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_ATTEMPT });
    const response = await axios.get("http://localhost:5000/product", {
      params,
    });
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchBrands = (brandId = []) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_ATTEMPT });
    const response = await axios.get("http://localhost:5000/brand", {
      params: { id: [...brandId] },
    });
    dispatch({ type: FETCH_BRANDS, payload: response });
  };
};
