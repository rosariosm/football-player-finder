import { superagentMock } from '../../__mocks__/superagent-mock'
import { players }        from '../../__mocks__/players-mock'
import { store }          from '../../__mocks__/store-mock'

import * as selectActions from '../../src/actions/footballPlayers'


describe('Football Players actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should fetch data successfuly', () => {
    const expectedActions = [
      { type: 'FETCH_PLAYERS_PENDING' },
      { type: 'FETCH_PLAYERS_SUCCESS', payload: players },
    ];

    store.dispatch(selectActions.fetchPlayers())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  it('should fetch data with error', () => {
    //TODO: test FETCH_PLAYERS_FAILURE
  });

  it('should update filters', () => {
    const expectedActions = [
      { type: 'UPDATE_FILTERS', payload: 'filters' },
    ];

    store.dispatch(selectActions.updateFilters('filters'))
    expect(store.getActions()).toEqual(expectedActions);

  });
});
