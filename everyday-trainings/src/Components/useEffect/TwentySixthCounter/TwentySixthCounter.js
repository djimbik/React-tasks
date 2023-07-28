import React, {useEffect, useState} from 'react';

const TwentySixthCounter = () => {
    const [counter, setCounter] =  useState(() => {
        // Читаем значение счетчика из локального хранилища при загрузке компонента
        const savedCounter = localStorage.getItem('counter');
        return savedCounter ? parseInt(savedCounter, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('myNumber', counter.toString());


    }, [counter])

    const increaseCounterHandler = () => {
        setCounter(prevState => prevState + 1)
    }

    const decreaseCounterHandler = () => {
        setCounter(prevState => prevState - 1)
    }

    return (
        <div>
            <span>{counter} </span>
            <button onClick={increaseCounterHandler}> + </button>
            <button onClick={decreaseCounterHandler}> - </button>
        </div>
    );
};

export default TwentySixthCounter;