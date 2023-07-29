import React, {useContext} from 'react';
import style from './TwentyNineTheme.module.css'
import {ThemeContext} from "./TwentyNineTheme";

const BlockForTwentyNineTheme = () => {
    const ctx = useContext(ThemeContext)

    const classForBlock = ctx.theme === 'light' ? style['light-theme'] : style['dark-theme'];

    const changeThemeHandler = () => {
        ctx.onChangeTheme()
    };

    const buttonText = ctx.theme === 'light' ? 'lights off' : 'lights on'

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

export default BlockForTwentyNineTheme;