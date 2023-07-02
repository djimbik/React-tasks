import React, {useEffect, useRef} from 'react';

const SecondFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }

    }, [])

    return (
        <div>
            <input type="text" placeholder={'login'} ref={inputRef}/>
            <input type="password" placeholder={'password'}/>
        </div>
    );
};

export default SecondFocus;