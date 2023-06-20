import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from '../reducer/User'
import CustomerReducer from '../reducer/CustomerData'

const configureStore = () => {
    const store = createStore(combineReducers({
        User: UserReducer,
        Customer: CustomerReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore