import React, {useEffect, useRef} from 'react';

const TextInput = () => {
    const textRef = useRef('');

    const deleteTextHandler = () => {
        textRef.current.value = ''
    }

    return (
        <div>
            <input ref={textRef} type="text"/>
            <button onClick={deleteTextHandler}>Очистить</button>
        </div>
    );
};

export default TextInput;