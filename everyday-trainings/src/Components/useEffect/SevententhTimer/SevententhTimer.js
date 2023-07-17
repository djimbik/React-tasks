import React, {useEffect, useState} from 'react';

const SeventeenthTimer = () => {
    const [timer, setTimer] = useState(10);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;

        if (running) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId)
        }

    }, [running])

    const handleStartTimer = () => {
        setRunning(true)
    }

    const handleStopTimer = () => {
        setRunning(false);
        setTimer(0)
    }

    return (
        <div>
            {timer}
            <button onClick={handleStartTimer}>start timer</button>
            <button onClick={handleStopTimer}>Stop timer</button>
        </div>
    );
};

export default SeventeenthTimer;