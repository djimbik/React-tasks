import React, {useRef, useState} from 'react';

const NewTimer = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prevState => prevState + 1)
        }, 1000)
    }

    const pauseTimer = () => {
        clearInterval(intervalRef.current)
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current)
        setTime(0)
    }

    return (
        <div>
            <h2>Timer: {time} seconds</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default NewTimer;