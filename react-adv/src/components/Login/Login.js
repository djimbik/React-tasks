import React, {useEffect, useReducer, useState} from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.includes('@')
        }
    }

    return {
        value: '',
        isValid: false
    }
}

// Проделать для пароля

const Login = (props) => {
    // const [inputEmail, setInputEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    const [inputPassword, setInputPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: '', isValid: false})

    // useEffect(() => {
    //   //debounce
    //   const timer = setTimeout(() => {
    //     console.log('effect');
    //      setFormIsValid(
    //         inputEmail.includes("@") && inputPassword.trim().length > 7
    //     );
    //   }, 1000)
    //
    //   // функция очистки (будет производиться до setTimeout
    //   return () => {
    //     console.log('очистка');
    //     clearTimeout(timer)
    //   }
    // }, [inputEmail, inputPassword])

    const emailChangeHandler = (event) => {
        // setInputEmail(event.target.value);
        dispatchEmailState({type: 'USER_INPUT', value: event.target.value})

        setFormIsValid(
            emailState.isValid && inputPassword.trim().length > 7
        );
    };

    const passwordChangeHandler = (event) => {
        setInputPassword(event.target.value);

        setFormIsValid(
            event.target.value.length > 7 && emailState.isValid
        );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid); // Если мы обновляем состояние
        // на основе другого состояния (мы передаем в функцию другое состояние), то лучше использовать
        // useReducer

        dispatchEmailState({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(inputPassword.trim().length > 7);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, inputPassword);
    };

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailState.isValid === false ? styles.invalid : ""
                    }`}
                >
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordIsValid === false ? styles.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={inputPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit" className={styles.btn} disabled={!formIsValid}>
                        Вход
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
