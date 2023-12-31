import React, {useState} from "react";

export const ThemeContext = React.createContext({
    theme: '',
    onChangeThemeHandler: () => {
    }
})

const ThemeProvider1 = ({children}) => {
    const [theme, setTheme] = useState('light');

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