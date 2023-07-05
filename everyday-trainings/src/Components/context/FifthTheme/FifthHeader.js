import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext";
import styles from './FifthHeader.module.css'

const FifthHeader = () => {
    const themeContext = useContext(ThemeContext);

    const changeThemeHandler = () => {
        themeContext.onChangeThemeHandler();
    }

    const classForBlock = themeContext.theme === 'dark' ? styles['dark-theme'] : styles['light-theme'];
    const buttonText = themeContext.theme === 'dark' ? 'Lights on!' : 'Lights off!';

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

export default FifthHeader;