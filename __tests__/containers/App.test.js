import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as selectActions from '../../src/actions/footballPlayers'
import App from '../../src/containers/App';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
  players: [],
  error: null,
  is_fetching: false,
  filters: null,
};
const store = mockStore(initialState);


describe('<App />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<App store={store}/>);
      expect(wrapper.find('App').exists()).toBe(true);
    })
  });

  describe('redux actions', () => {
    /*beforeEach(() => {
      store.clearActions();
    });*/

    const store = mockStore(initialState);
    it('should execute fetch data', () => {
      store.dispatch(selectActions.fetchPlayers())
      console.log(store.getActions())
      /*const actions = store.getActions()

      store.dispatch(selectActions.fetchPlayers())
        .then(() => {
          expect(actions[0]).toEqual(selectActions.fetchPlayersSuccess())
        })
        .catch(() =>{
          expect(actions[0]).toEqual(selectActions.fetchPlayersFailure())
        })*/
    });


    it('dispatches the correct action and payload', () => {
      /*const expectedAction = [
        {
          'payload': 1,
          'type': 'select_avatar',
        },
      ];

      store.dispatch(selectActions.fetchPlayers);
      expect(store.getActions()).toEqual(expectedAction);*/

    });
  });
});
