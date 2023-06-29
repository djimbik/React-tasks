import React, {useState} from "react";

export const ThemeContext = React.createContext({
    theme: 'dark',
    onChangeThemeHandler: () => {
    }
})

const ThemeProvider1 = ({children}) => {
    const [theme, setTheme] = useState('dark')

    const onChangeThemeHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            onChangeThemeHandler: onChangeThemeHandler
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider1;