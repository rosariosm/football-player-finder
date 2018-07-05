import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({});

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
  	action.payload.then(
      res => {
      	action.payload = res;
      	store.dispatch(action);
      },
      error => {
      	action.error = true;
        console.log(error);
      	action.payload = error.response.body;
      	store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

function isPromise(v){
	return v && typeof v.then === 'function';
}


export { thunkMiddleware, promiseMiddleware, loggerMiddleware };