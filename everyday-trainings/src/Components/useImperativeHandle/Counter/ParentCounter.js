import React, {useRef} from 'react';
import NewCounter from "./NewCounter";

const ParentCounter = () => {
    const counterRef = useRef(null);

    const handleButtonClick = () => {
        console.log('Current number:', counterRef.current.getNums());
        counterRef.current.increaseNum();
        console.log('Updated number:', counterRef.current.getNums());
    }


    return (
        <div>
            <button onClick={handleButtonClick}>Увеличить!</button>
            <NewCounter ref={counterRef}/>
            
        </div>
    );
};

export default ParentCounter;