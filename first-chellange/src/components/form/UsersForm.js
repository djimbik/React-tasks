import React from 'react';
import style from './UserForm.module.css'
import FormField from "./FormField";
import {useState} from "react";

const UsersForm = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');

    const sendFormHandler = (evt) => {
        evt.preventDefault();

        if (name === '' || age === '') {
            props.setIsModalView(true)
            return
        }

        props.addUser(name, age)
        setName('');
        setAge('');
    }

    return (
        <form className={style['main-user-form']}
              onSubmit={sendFormHandler}>
            <FormField id={'user-name'}
                       labelName={'Имя'}
                       setData={setName}
                       value={name}/>
            <FormField id={'age'}
                       labelName={'Возраст'}
                       setData={setAge}
                       value={age}/>
            <button className={style['form-button']} type={'submit'}>Добавить пользователя</button>
        </form>
    );
};

export default UsersForm;