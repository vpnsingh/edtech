import { createStore, combineReducers } from "redux";
import MyReducer from '../reducers/MyReducer'

const rootReducer = combineReducers({MyReducer})

const store = createStore(rootReducer)

export default store