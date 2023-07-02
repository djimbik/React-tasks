
import React, {useReducer} from "react";

export const LanguageContext = React.createContext({
    lang: '',
    changeLangToEng: () => {},
    changeLangToRu: () => {}
})

const initialState = {
    lang: 'ru',
}

const langReducer = (prevState, action) => {
    if (action.type === 'CHANGE_LANG_ENG') {
        return {...prevState, lang: 'eng'}
    }
    if (action.type === 'CHANGE_LANG_RU') {
        return {...prevState, lang: 'ru'}
    }
    return prevState
}


export const LanguageContextProvider = ({children}) => {
    const [language, dispatchLang] = useReducer(langReducer, initialState);

    const changeLangToEng = () => {
        dispatchLang({type: 'CHANGE_LANG_ENG'})
    }

    const changeLangToRu= () => {
        dispatchLang({type: 'CHANGE_LANG_RU'})
    }

    return (
        <LanguageContext.Provider value={{lang: language.lang, changeLangToEng, changeLangToRu}}>
            {children}
        </LanguageContext.Provider>
    )
}