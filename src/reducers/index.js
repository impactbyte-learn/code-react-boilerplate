import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import jsonAPI from './modules/jsonAPI';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const rootReducer = combineReducers({
  jsonAPI
});
const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
