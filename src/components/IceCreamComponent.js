import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamComponent(props) {
    return (
        <div>
            <h1>Ice Cream Shop: {props.noOfCakes}</h1>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        noOfCakes: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent)
