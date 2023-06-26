import React, {useReducer} from 'react';

const initialState = {
    nums: 0,
}

const couterReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return {nums: state.nums + 1}
    } else if (action.type === 'DECREMENT') {
        return {nums: state.nums - 1}
    } else {
        throw new Error('Unknown action');
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(couterReducer, initialState)

    const handleIncrease = () => {
        dispatch({type: 'INCREMENT'})
    }

    const handleDecrease = () => {
        dispatch({type: 'DECREMENT'})
    }

    return (
        <div>
            <div>{state.nums}</div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
};

export default CounterReducer;