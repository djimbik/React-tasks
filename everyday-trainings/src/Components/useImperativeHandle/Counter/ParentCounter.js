import React, {useRef} from 'react';
import NewCounter from "./NewCounter";

const ParentCounter = () => {
    const counterRef = useRef(null);

    const handleButtonClickIncrease = () => {
        console.log('Current number:', counterRef.current.getNums());
        counterRef.current.increaseNum();
        console.log('Updated number:', counterRef.current.getNums());
    }

    const handleButtonClickDecrease = () => {
        counterRef.current.decreaseNum();
    }


    return (
        <div>
            <button onClick={handleButtonClickIncrease}>Увеличить!</button>
            <button onClick={handleButtonClickDecrease}>Уменьшить!</button>
            <NewCounter ref={counterRef}/>
            
        </div>
    );
};

export default ParentCounter;