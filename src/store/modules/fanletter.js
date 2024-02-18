import { fanLetters } from "../../static/data";

const ADD_FANLETTER = "fanletter/ADD_FANLETTER";
const DELETE_FANLETTER = "fanletter/DELETE_FANLETTER";
const UPDATE_FANLETTER = "fanletter/UPDATE_FANLETTER";

const initialState = fanLetters;

export const addFanLetter = (payload) => {
  return { type: ADD_FANLETTER, payload };
};

export const updateFanLetter = (payload) => {
  return { type: UPDATE_FANLETTER, payload };
};

export const deleteFanLetter = (payload) => {
  return { type: DELETE_FANLETTER, payload };
};

const fanletter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FANLETTER:
      return [...state, action.payload];
    case DELETE_FANLETTER:
      return state.filter((letter) => letter.id !== action.payload);
    case UPDATE_FANLETTER:
      return state.map((letter) => (letter.id === action.payload.id ? action.payload : letter));
    default:
      return state;
  }
};

export default fanletter;
