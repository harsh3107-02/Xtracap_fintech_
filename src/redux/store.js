import { createStore } from "redux";

const initialState = {
  searchQuery: "",
  searchResults: [],
  cart: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
};

const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SET_STAR_STATES = "SET_STAR_STATES";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const setStarStates = (starStates) => ({
  type: SET_STAR_STATES,
  payload: starStates,
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] };
      
    case ADD_TO_CART:
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        const tempProduct = { ...action.payload };
        state.cart.push(tempProduct);
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
        
      }
      return state;
    case REMOVE_FROM_CART:
      const nextCartItems = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      localStorage.setItem("cartItem", JSON.stringify(nextCartItems));
      return { ...state, cart: nextCartItems };
      case SET_STAR_STATES:
      return { ...state, starStates: action.payload };
    default:
      return state;
  }
};

export const store = createStore(searchReducer);
export default searchReducer;
