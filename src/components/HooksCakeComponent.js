import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeComponent() {
    const numOfCakes = useSelector(state => state.cake.noOfcakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Cake Shop: {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCakeComponent
