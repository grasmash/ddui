// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import registrar from './registrar';

const rootReducer = combineReducers({
  counter,
  registrar,
  router,
});

export default rootReducer;
