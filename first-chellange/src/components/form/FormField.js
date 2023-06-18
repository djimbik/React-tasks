import React from 'react';
import style from './FormField.module.css';

const FormField = (props) => {

    const handleInputChange = (evt) => {
        if (evt.target.id === 'age') {
            const numericValue = evt.target.value.replace(/\D/g, '');
            evt.target.value = numericValue;
        }
        props.setData(evt.target.value)
    }

    return (
        <>
            <label className={style.label} htmlFor={props.id}>{props.labelName}</label>
            <input
                className={style.input}
                   type="text"
                   id={props.id}
            onInput={handleInputChange}
            value={props.value}/>
        </>
    );
};

export default FormField;