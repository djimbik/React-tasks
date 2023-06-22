import React, {useEffect, useRef, useState} from 'react';
import styles from './DateTimeComponent.module.css';

//Задача 1: useEffect
// Вам нужно создать компонент, который отображает текущую дату и время.
// Компонент должен использовать хук useEffect для обновления времени каждую секунду.

export const DateTimeComponent = () => {
    const [time, setTime] = useState(new Date())

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

    return (
        <div>
            {time.toLocaleString()}
        </div>
    );
};
















