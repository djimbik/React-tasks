import React, {useRef} from 'react';

const FormConsole = () => {
    const inputRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault()
       console.log(inputRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text"/>
            <button type={"submit"}>Go!</button>
        </form>
    );
};

export default FormConsole;