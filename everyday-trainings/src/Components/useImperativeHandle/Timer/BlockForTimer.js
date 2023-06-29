import React, {useRef} from 'react';
import NewForwardTimer from "./Timer";

const BlockForTimer = () => {
    const timerRef = useRef(null)

    return (
        <div>
            <NewForwardTimer ref={timerRef}/>
            <button onClick={() => timerRef.current.startTimer()}>Start</button>
            <button onClick={() => timerRef.current.stopTimer()}>Stop</button>
        </div>
    );
};

export default BlockForTimer;