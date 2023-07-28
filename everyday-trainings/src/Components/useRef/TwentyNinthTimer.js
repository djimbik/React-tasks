import React, {useRef, useState} from 'react';

const TwentyNinthTimer = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef()

    const startTimerHandler = () => {
        timerRef.current = setInterval(() => {
            setTime(prevState => prevState + 1)
        }, 1000)
    }

    const stopTimerHandler = () => {
        clearInterval(timerRef.current)
        setTime(0)
    }

    const  pauseTimerHandler = () => {
        clearInterval(timerRef.current)
    }

    return (
        <div>
            {time}
            <button onClick={startTimerHandler}>start</button>
            <button onClick={stopTimerHandler}>stop</button>
            <button onClick={pauseTimerHandler}>pause</button>
        </div>
    );
};

export default TwentyNinthTimer;