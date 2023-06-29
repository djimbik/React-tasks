import React, { useRef, useState} from 'react';

const ClickCounter = () => {
    const clicksRef = useRef(0);
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        clicksRef.current = clicksRef.current + 1
        setClickCount(clicksRef.current)
    }

    return (
        <div >
            <button onClick={handleButtonClick}>Click Me</button>
            {clickCount}
        </div>
    );
};

export default ClickCounter;