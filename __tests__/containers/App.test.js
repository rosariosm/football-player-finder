import React              from 'react';
import { shallow, mount } from 'enzyme';
import { store }          from '../../__mocks__/store-mock'
import { superagentMock } from '../../__mocks__/superagent-mock'
import { players }        from '../../__mocks__/players-mock'

import * as selectActions from '../../src/actions/footballPlayers'
import App                from '../../src/containers/App';


describe('<App />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<App store={store}/>);
      expect(wrapper.find('App').exists()).toBe(true);
    })
  });

  describe('redux actions', () => {
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

    //TODO: MOCK ERROR

    it('should dispatch error action', () => {
      const expectedActions = [
        { type: 'FETCH_PLAYERS_PENDING' },
        { type: 'FETCH_PLAYERS_FAILURE', payload: 'error' },
      ];

      store.dispatch(selectActions.fetchPlayers);
      expect(store.getActions()).toEqual(expectedAction);
    });
    
  });
});
