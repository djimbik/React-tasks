import React, {useReducer} from 'react';

const initialState = {
    name: '',
    email: '',
    message: ''
};

function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {...state, [action.name]: action.value}
        case 'RESET_FIELD':
            return initialState
        default:
            return state
    }
}

function Form() {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleChange = (evt) => {
        const {name, value} = evt.target
        dispatch({
            type: 'UPDATE_FIELD',
            name: name,
            value: value
        })
    };

    const handleReset = () => {
        dispatch({type: 'RESET_FIELD'})
    };

    return (
        <form>
            <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder={"name"}
            />
            <input
                type="email"
                name="email"
                value={state.email}
                placeholder={'email'}
                onChange={handleChange}
            />
            <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
            />
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}

export default Form