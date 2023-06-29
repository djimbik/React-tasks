import React, {forwardRef, useImperativeHandle, useState} from 'react';

const FormLogic = forwardRef((props, ref) => {
    const [text, setText] = useState('');

    useImperativeHandle(ref, () => ({
        getText: () => text,
    }))

    const onChangeHandler = (evt) => {
        setText(evt.target.value)
    }

    return (
        <input type="text" onChange={onChangeHandler}/>
    );
})

export default FormLogic;