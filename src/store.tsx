import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './reducers';

function configureStore(state = { employeeReducer: {}, rotating: true }) {
  return createStore(rootReducers, state, applyMiddleware(thunk));
} 

export default configureStore;  