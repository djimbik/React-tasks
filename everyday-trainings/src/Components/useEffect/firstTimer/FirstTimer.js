import React, {useEffect, useState} from 'react';

const FirstTimer = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            {time.toLocaleString()}
        </div>
    );
};

export default FirstTimer;