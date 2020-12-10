import React from 'react'
import {connect} from 'react-redux'
import {buyCake, buyIceCream} from '../redux';

function ItemComponent(props) {
    return (
        <div>
            <h1>Item: {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.cake ? state.cake.noOfcakes : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? 
    () => dispatch(buyCake()) :
    () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent)
