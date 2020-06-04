import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [thunk];

//disable the redux logs for production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

//const store = createStore(rootReducer, applyMiddleware(loggger))

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

