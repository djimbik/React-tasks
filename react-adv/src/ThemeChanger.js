import React, { useReducer } from 'react';

const initialState = {
    theme: 'light'
};

function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
}

export function ThemeChanger() {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const handleToggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
        console.log(state)
    };

    return (
        <div className={state.theme}>
            <h1>Theme Example</h1>
            <button onClick={handleToggleTheme}>Toggle Theme</button>
        </div>
    );
}