import footballPlayersReducer from '../../src/reducers/footballPlayers';
import { FETCH_PLAYERS_PENDING,
         FETCH_PLAYERS_SUCCESS,
         FETCH_PLAYERS_FAILURE,
         UPDATE_FILTERS
       } from '../../src/constants/actionTypes';

import { players } from '../../__mocks__/players-mock'

describe('footballPlayers reducer', () => {
  describe('INITIAL_STATE', () => {
    it('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = {
       players: [],
       error: null,
       is_fetching: false,
       filters: null,
      };

      expect(footballPlayersReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH_PLAYERS_PENDING', () => {
    it('returns the correct state', () => {
      const action = { type: FETCH_PLAYERS_PENDING };
      const expectedState = { players: [], error: null, is_fetching: true, filters: null };

      expect(footballPlayersReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_PLAYERS_SUCCESS', () => {
    it('returns the correct state', () => {
      const action = { type: FETCH_PLAYERS_SUCCESS, payload: players };
      const expectedState = { players: players, error: null, is_fetching: false, filters: null };

      expect(footballPlayersReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_PLAYERS_FAILURE', () => {
    it('returns the correct state', () => {
      const action = { type: FETCH_PLAYERS_FAILURE, payload: 'error' };
      const expectedState = { players: [], error: 'error', is_fetching: false, filters: null };

      expect(footballPlayersReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('UPDATE_FILTERS', () => {
    it('returns the correct state', () => {
      const action = { type: UPDATE_FILTERS, payload: 'filters' };
      const expectedState = { players: [], error: null, is_fetching: false, filters: 'filters' };

      expect(footballPlayersReducer(undefined, action)).toEqual(expectedState);
    });
  });
});