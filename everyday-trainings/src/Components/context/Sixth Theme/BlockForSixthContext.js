import React, {useContext} from 'react';
import {SixthThemeContext} from "./SixthTheme";
import styles from './SixthHeader.module.css'

const BlockForSixthContext = () => {
    const ctx = useContext(SixthThemeContext)

    const classForBlock = ctx.theme === 'dark' ? styles["dark-theme"] : styles["light-theme"] ;

    const changeThemeHandler = () => {
        ctx.onChangeTheme()
    }

    const buttonText = ctx.theme === 'dark' ? 'Lights on!' : 'Lights off!'

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

export default BlockForSixthContext;