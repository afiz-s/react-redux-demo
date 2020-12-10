import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./usersType";
const initialState = {
  users: [],
  error: "",
  loading: true,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
