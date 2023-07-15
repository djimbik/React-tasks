import React, {useContext} from 'react';
import {FifteenthContext} from "./FifteenthContext";
import styles from './FifthHeader.module.css'

const FifteenthHeader = () => {
    const ctx = useContext(FifteenthContext);

    const changeThemeHandler = () => {
        ctx.onChangeTheme()
    }

    const classForBlock = ctx.theme === 'dark' ? styles['dark-theme'] : styles['light-theme'];
    const buttonText = ctx.theme === 'dark' ? 'turn on!' : 'turn off';

    return (
        <div className={classForBlock}>
            <p>Go-GO, let's go!</p>
            <p>Just one more step</p>
            <div>
                I'm a text for example
            </div>
            <button onClick={changeThemeHandler}>
                {buttonText}
            </button>
        </div>
    );
};

export default FifteenthHeader;