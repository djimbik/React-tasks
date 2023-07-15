import React, {forwardRef, useImperativeHandle, useState} from 'react';

const Counter = forwardRef ((props,ref) => {
    const [num, setNum] = useState(0);

    useImperativeHandle(ref, () => ({
        increaseNum: () => setNum(prevState => prevState + 1),
        decreaseNum: () => setNum(prevState => prevState - 1),
    }))

    return (
        <div>
            {num}
        </div>
    );
} );

export default Counter;