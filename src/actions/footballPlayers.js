import  agent from '../agent';
import {
  FETCH_PLAYERS_PENDING,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
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

export function fetchPlayers(options) {
  return function (dispatch) {
    dispatch(fetchPlayersPending());
    agent.PlayerRequests.all(options)
      .then( response => { dispatch(fetchPlayersSuccess(response)) })
      .catch(err => {  dispatch(fetchPlayersFailure(err));
      });
  }
}
