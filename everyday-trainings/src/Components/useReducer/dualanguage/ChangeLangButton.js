import React, {useContext} from 'react';
import {LanguageContext} from "./LanguageContext";

const ChangeLangButton = () => {
    const langContext = useContext(LanguageContext);

    const buttonClickHandler = () => {
        if (langContext.lang === 'ru') {
            langContext.changeLangToEng()
        } else {
            langContext.changeLangToRu()
        }
    }

    return (
        <div>
            <button onClick={buttonClickHandler}>{langContext.lang === 'ru' ? 'eng' : 'ru'}</button>
        </div>
    );
};

export default ChangeLangButton;