import React, {useReducer} from 'react';

const initialState = {
    num: 0
}

const counterReducer = (prevState, action) => {
    if (action.type === 'INCREASE_NUM') {
       return prevState = {...prevState, num: prevState.num + 1}
    }
    if (action.type === 'DECREASE_NUM') {
        return prevState = {...prevState, num: prevState.num - 1}
    }
    return prevState
}


const RomanCounter = () => {
    const [state, dispatch] = useReducer(counterReducer ,initialState)

    const increaseNumHandler = () => {
        dispatch({type: 'INCREASE_NUM'})
    }

    const decreaseNumHandler = () => {
        dispatch({type: 'DECREASE_NUM'})
    }

    return (
        <div>
            <div>{state.num}</div>
            <button onClick={increaseNumHandler}>Increase</button>
            <button onClick={decreaseNumHandler}>Decrease</button>
        </div>
    );
};

export default RomanCounter;