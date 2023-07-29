import React, {useState} from "react";

export const ThemeContext = React.createContext({
    theme: '',
    onChangeTheme: () => {}
})

export const ThemeContextProvider29 = ({children}) => {
    const [theme, setTheme] = useState('light')

    const onChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            onChangeTheme: onChangeTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}