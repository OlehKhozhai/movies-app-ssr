import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from 'redux/reducer';

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export type AppStore = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, enhancer);
