import React, {useState} from "react";

export const FifteenthContext = React.createContext({
    theme: '',
    onChangeTheme: () => {}
})

export const FifteenthContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const onChangeThemeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <FifteenthContext.Provider value={{
            theme,
            onChangeTheme: onChangeThemeHandler,
        }}>
            {children}
        </FifteenthContext.Provider>
    )
}