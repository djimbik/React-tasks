import React, {forwardRef, useImperativeHandle, useState} from 'react';

const ChildComponent =forwardRef ((props, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [parValue, setParValue] = useState('');

    const onChangeHandler = (evt) => {
        setInputValue(evt.target.value)
    }

    const handleSave = () => {
        setParValue(inputValue)
    }

    useImperativeHandle(ref, () => ({
        save: handleSave
    }))

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangeHandler}/>

            <p>{parValue}</p>
        </div>
    );
});

export default ChildComponent;