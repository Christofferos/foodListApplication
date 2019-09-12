import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Only chrome can handle the redux dev tool
// redux compose cannot handle a null or undefined middleware
const store;
if (window.navigator.userAgent.includes('Chrome')) {
   store = createStore(rootReducer, initialState, compose(
 applyMiddleware(...middleware),
 window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ));
} else {
   store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}


/*
Tutorial way of doing. Does not work on Safari!
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);
*/

//
export default store;
