import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import {usersReducer} from './users/usersReducer'

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer,
    user: usersReducer
})

export default rootReducer; 