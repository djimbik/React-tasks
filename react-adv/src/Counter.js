import React, {useReducer} from 'react';

const initialState = {
    num: 0
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_NUM':
            return {num: state.num + 1}
        case 'DECREASE_NUM':
            return {num: state.num - 1}
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const increaseNumHandler = () => {
        dispatch({type: 'INCREASE_NUM'})
    }

    const decreaseNumHandler = () => {
        dispatch({type: 'DECREASE_NUM'})
    }

    return (
        <div>
            <div>{state.num}</div>
            <button onClick={increaseNumHandler}>Увеличим</button>
            <button onClick={decreaseNumHandler}>Уменьшим</button>
        </div>
    );
};

export default Counter;