import React, {useContext} from 'react';
import {LanguageContext} from "./LanguageContext";

const MultiLanguage = () => {
    const langContext = useContext(LanguageContext)

    return (
        <div>
            {langContext.lang === 'eng' ? <div>English is the best</div> : <div>Русский язык - лучший</div>}
        </div>
    );
};

export default MultiLanguage;