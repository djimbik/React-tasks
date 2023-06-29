import React, {forwardRef, useImperativeHandle, useState} from 'react';

const NewCounter = forwardRef ((props, ref) => {
    const [num, setNum] = useState(0)

    useImperativeHandle(ref, () => ({
        getNums: () => num,
        increaseNum: () => setNum(prevState => prevState + 1),
        decreaseNum: () => setNum(prevState => prevState - 1),
        clearNum: () => setNum(0)
    }))

    return (
        <div>
            {num}
        </div>
    );
})

export default NewCounter;
