import { combineReducers } from "redux";

import { filters, pizzas, cart } from './reducers'

const rootReducer = combineReducers({
    cart,
    filters,
    pizzas
})

export default rootReducer