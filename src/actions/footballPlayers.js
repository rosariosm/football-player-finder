import  agent from '../agent';
import {
  FETCH_PLAYERS_PENDING,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
  UPDATE_FILTERS
} from '../constants/actionTypes'


export const fetchPlayersPending = () => {
  return {
    type: FETCH_PLAYERS_PENDING
  }
}

export const fetchPlayersSuccess = (players) => {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players
  };
}

export const fetchPlayersFailure = (error) => {
  return {
    type: FETCH_PLAYERS_FAILURE,
    payload: error
  };
}

export const updateFilters = (filters) => {
  return {
    type: UPDATE_FILTERS,
    payload: filters
  }
}

export function fetchPlayers(options) {
  return function (dispatch) {
    dispatch(fetchPlayersPending());
    return agent.PlayerRequests.all(options)
      .then( response => { return dispatch(fetchPlayersSuccess(response)) })
      .catch(err => {  return dispatch(fetchPlayersFailure(err));
      });
  }
}
