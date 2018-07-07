import { FETCH_PLAYERS_PENDING,
         FETCH_PLAYERS_SUCCESS,
         FETCH_PLAYERS_FAILURE
       } from '../constants/actionTypes';

const defaultState = {
  players: [],
  error: null,
  is_fetching: false
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
        contacts: action.payload,
        filteredContacts: action.payload,
        is_fetching: false
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        is_fetching: false,
        error: action.payload
      };
    default: return state;
  }
};