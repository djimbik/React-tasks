import React, {useRef} from 'react';
import FormLogic from "./FormLogic";

const BlockForForm = () => {
    const formRef = useRef(null)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        return console.log(formRef.current.getText()) ;
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormLogic ref={formRef}/>
            <button type={'submit'}>Отправка</button>
        </form>
    );
};

export default BlockForForm;