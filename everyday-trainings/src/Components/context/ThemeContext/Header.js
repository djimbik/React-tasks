import React, {useContext} from 'react';
import ThemeProvider, {ThemeContext} from "./ThemeContext";
import styles from './Header.module.css';

const Header = () => {
    const ctx = useContext(ThemeContext)

    const changeThemeHandler = () => {
        ctx.onChangeThemeHandler()
    }

    const buttonText = ctx.theme === 'dark' ? 'Lights on!' : 'Lights off!'
    const classForBlock = ctx.theme === 'dark' ? styles['dark-theme'] : styles['light-theme']

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

export default Header;