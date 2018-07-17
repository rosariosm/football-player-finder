import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
  players: [],
  error: null,
  is_fetching: false,
  filters: null,
};

export const store = mockStore(initialState);