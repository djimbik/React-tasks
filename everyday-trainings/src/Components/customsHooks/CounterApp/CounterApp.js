import React from 'react';
import useCounter from './useCounter';

const CounterApp = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h3>Счетчик: {count}</h3>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
};

export default CounterApp;