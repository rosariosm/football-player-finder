import { FETCH_PLAYERS_PENDING,
         FETCH_PLAYERS_SUCCESS,
         FETCH_PLAYERS_FAILURE,
         UPDATE_FILTERS
       } from '../constants/actionTypes';

const defaultState = {
  players: [],
  error: null,
  is_fetching: false,
  filters: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_PENDING:
      return {
        ...state,
        is_fetching: true
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.payload,
        is_fetching: false
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        is_fetching: false,
        error: action.payload
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    default: return state;
  }
};