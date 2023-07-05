import React, {useState} from "react";

export const ThemeContext = React.createContext({
    theme: '',
    onChangeThemeHandler: () => {
    }
})

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState( 'light');
    console.log(theme)

    const onChangeThemeHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            onChangeThemeHandler: onChangeThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}