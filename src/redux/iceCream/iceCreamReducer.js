const { BUY_ICECREAM } = require("./iceCreamType")

const initialIceCreamState = {
    numOfIceCreams: 100
}

const iceCreamReducer = (state=initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state, 
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    }
}

export default iceCreamReducer;