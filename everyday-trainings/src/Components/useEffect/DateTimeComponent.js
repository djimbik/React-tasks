import React, {useContext, useEffect, useState} from 'react';
import styles from './DateTimeComponent.module.css'
import {ThemeContext} from "../context/changeTheme";


//Задача 1: useEffect
// Вам нужно создать компонент, который отображает текущую дату и время.
// Компонент должен использовать хук useEffect для обновления времени каждую секунду.

export const DateTimeComponent = () => {
    const [time, setTime] = useState(new Date())
    const {theme, toggleTheme} = useContext(ThemeContext)

    useEffect(
        () => {
            const timer = setInterval(() => {
                setTime(new Date());
            }, 1000)


            return () => {
                clearInterval(timer);
            };
        }, []
    )

    const changeThemeHandler = () => {
        toggleTheme()
    }

    const headerStyle = theme === 'dark' ? styles.darkHeader : styles.lightHeader;

    return (
        <div className={headerStyle}>
            {time.toLocaleString()}

            <button onClick={changeThemeHandler}>Click!</button>
        </div>
    );
};
















