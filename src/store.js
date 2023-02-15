import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restreducer";

//reducer create

const reducers=combineReducers({
    restaurentReducer:restaurantListReducer

    
})

//middleware create

const middleware=[thunk]

//create store

const store= createStore(reducers,applyMiddleware(...middleware))

export default store