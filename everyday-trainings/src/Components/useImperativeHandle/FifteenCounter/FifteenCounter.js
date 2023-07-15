import React, {useRef} from 'react';
import Counter from "./Counter";

const FifteenCounter = () => {
    const counterRef = useRef(null);

    const increaseNumHandler = () => {
        counterRef.current.increaseNum();
    }

    const decreaseNumHandler = () => {
        counterRef.current.decreaseNum();
    }

    return (
        <div>
            <button onClick={increaseNumHandler}>Увеличить!</button>
            <button onClick={decreaseNumHandler}>Уменьшить!</button>

            <Counter ref={counterRef}/>
        </div>
    );
};

export default FifteenCounter;