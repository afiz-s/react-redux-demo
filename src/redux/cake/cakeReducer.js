const { BUY_CAKE } = require("./cakeType");

const cakeInitialState = {
    noOfcakes: 10
}
const cakeReducer = (state = cakeInitialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state, 
            noOfcakes: state.noOfcakes - action.payload
        }
        default:
            return state;
    }
}

export default cakeReducer; 