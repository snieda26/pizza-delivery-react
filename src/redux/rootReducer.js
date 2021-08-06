import { combineReducers } from "redux";

import { filtersReducer, pizzasReducer } from './reducers'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

export default rootReducer