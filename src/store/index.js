import { legacy_createStore as createStore, combineReducers } from "redux";

import countReducer from "./modules/counter/reducer";

const reducers = combineReducers({ counter: countReducer });

const store = createStore(reducers);

export default store;
