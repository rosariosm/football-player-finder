import { applyMiddleware, createStore, compose } from 'redux';
import { thunkMiddleware, loggerMiddleware } from './middleware';
import  reducer from './reducers';

let middlewares = [ thunkMiddleware ]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

const composed = compose(applyMiddleware(...middlewares));
export const store = createStore(reducer, composed);