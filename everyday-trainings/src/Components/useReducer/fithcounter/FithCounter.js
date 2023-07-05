import React, {useReducer} from 'react';

const initialState = {
    count: 0
}

const counterReducer = (prevState, action) => {
    if (action.type === 'INCREASE_NUM') {
        return {...prevState, count: prevState.count + 1}
    }
    if (action.type === 'DECREASE_NUM') {
        return {...prevState, count: prevState.count - 1}
    }

    return prevState
}

const FithCounter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const increaseCounterHandler = () => {
        dispatch({type: 'INCREASE_NUM'})
    }

    const decreaseCounterHandler = () => {
        dispatch({type: 'DECREASE_NUM'})
    }

    return (
        <div>
            {state.count}
            <button onClick={increaseCounterHandler}>Increase</button>
            <button onClick={decreaseCounterHandler}>Decrease</button>
        </div>
    );
};

export default FithCounter;