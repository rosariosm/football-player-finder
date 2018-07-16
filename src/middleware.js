import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({});

export { thunkMiddleware, loggerMiddleware };