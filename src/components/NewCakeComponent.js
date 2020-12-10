import React, {useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function NewCakeComponent(props) {
    const [num, SetNum] = useState(1);
    return (
        <div>
            <h1>Cake Shop: {props.noOfCakes}</h1>
            <input type='text' value={num} onChange={e => SetNum(e.target.value)} />
            <button onClick={() => props.buyCake(num)}>Buy {num} Cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        noOfCakes: state.cake.noOfcakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent)
