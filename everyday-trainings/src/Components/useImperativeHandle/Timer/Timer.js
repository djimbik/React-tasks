import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';

const NewForwardTimer = forwardRef((props, ref) => {
    const [time, setTime] = useState(0);
    const timerForIntervalRef = useRef(null);

    useImperativeHandle(ref, () => ({
        startTimer: () => {
            timerForIntervalRef.current = setInterval(() => {
                setTime(prevState => prevState + 1)
            }, 1000)
        },
        stopTimer: () => {
            clearInterval(timerForIntervalRef.current);
            timerForIntervalRef.current = null
            setTime(0);
        }
    }))

    useEffect(() => {
        return () => {
            clearInterval(timerForIntervalRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time: {time} seconds</p>
        </div>
    );
});

export default NewForwardTimer;