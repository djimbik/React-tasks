import React, {useState} from "react";

export const SixthThemeContext = React.createContext(
    {
        theme: '',
        onChangeTheme: () => {}
    }
)

export const SixthThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    const onChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    return (
        <SixthThemeContext.Provider value={{
            theme: theme,
            onChangeTheme: onChangeTheme,
        }}>
            {children}
        </SixthThemeContext.Provider>
    )
}