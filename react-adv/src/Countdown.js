import React, {useEffect, useState} from 'react';

const Countdown = () => {
    let [num, setNum] = useState(10)

    useEffect(() => {
        if (num === 0) {
            console.log('Countdown completed');
            return; // Останавливаем программу, если num равно 0
        }

        const timer = setTimeout(() => {
            console.log('effect');
            setNum(num - 1)
        }, 1000)

        // функция очистки (будет производиться до setTimeout
        return () => {
            clearTimeout(timer)
        }
    }, [num])

    const changeNumberHandler = (evt) => {
        setNum(evt.target.value)
    }

    return (
        <div>
            <input value={num}
                   onChange={changeNumberHandler}
                   type="text"/>
            <p>{num}</p>
            <p></p>
        </div>
    );
};

export default Countdown;