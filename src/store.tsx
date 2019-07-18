import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import rotateReducer from "./reducers/rotateReducer";

function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state, applyMiddleware(thunk));
}

export default configureStore;