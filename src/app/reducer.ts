// app/reducer.ts

import { combineReducers } from 'redux';
import contactReducer from '../features/contacts/contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export default rootReducer;
