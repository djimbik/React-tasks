import React, {useEffect, useReducer, useRef, useState} from 'react';
import styles from './ThirdForm.module.css'

const initialState = {
    surname: '',
    fullName: '',
    secondName: '',
    personName: '',
}

const inputReducer = (prevState, action) => {
    if (action.type === 'CHANGE_INPUT') {
        const {field, value} = action;
        const updatedState = {...prevState, [action.field]: action.value}

        return {
            ...updatedState,
            personName: `${updatedState.surname} ${updatedState.fullName} ${updatedState.secondName}`
        }
    }
}

const ThirdForm = () => {
    const [inputState, dispatch] = useReducer(inputReducer, initialState);
    const firstInputRef = useRef(null);
    const [isNameBlockHide, setIsNameBlockHide] = useState(false);

    useEffect(() => {
        firstInputRef.current.focus()
    }, [])

    const changeInputHandler = (field, value) => {
        dispatch({type: 'CHANGE_INPUT', field, value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // Добавьте здесь логику для обработки отправки формы
        setIsNameBlockHide(true)
    };

    return (
        <React.Fragment>
            <form className={styles.form} onSubmit={submitHandler}>
                <label htmlFor={'surname'}> Фамилия </label>
                <input type="text"
                       placeholder={'фамилия'}
                       id={'surname'}
                       ref={firstInputRef}
                       value={inputState.surname}
                       onChange={(e) => {
                           changeInputHandler('surname', e.target.value)
                       }}/>
                <label htmlFor={'fullName'}> Имя </label>
                <input type="text"
                       placeholder={'имя'}
                       id={'fullName'}
                       value={inputState.fullName}
                       onChange={(e) => {
                           changeInputHandler('fullName', e.target.value)
                       }}/>
                <label htmlFor={'secondName'}> Отчество </label>
                <input type="text"
                       placeholder={'отчество'}
                       id={'secondName'}
                       value={inputState.secondName}
                       onChange={(e) => {
                           changeInputHandler('secondName', e.target.value)
                       }}/>
                <button>Отправить данные</button>
            </form>
            {isNameBlockHide && <div>{inputState.personName}</div>}
        </React.Fragment>
    );
};

export default ThirdForm;
