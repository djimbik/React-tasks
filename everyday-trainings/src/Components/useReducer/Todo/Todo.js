import React, {useReducer, useState} from 'react';

const initialState = {
    todos: [
        {id: 1, name: 'First Task'}
    ],

}
console.log(initialState)

const todoReducer = (prevState, action) => {
    if (action.type === 'ADD_TASK') {
        return {
            ...prevState,
            todos: [...prevState.todos, {id: action.payload.id, name: action.payload.name}]
        }
    }
    if (action.type === 'REMOVE_TASK') {
        return {
            ...prevState,
            todos: [...prevState.todos.filter(item => item.id !== action.payload.id)]
        }
    }
    return prevState
}

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const changeInputHandler = (evt) => {
        setInputValue(evt.target.value)
    }

    const addTodoHandler = (id, name) => {
        dispatch({type: 'ADD_TASK', payload: {id, name}})
    }

    const removeTodoHandler = (id) => {
        dispatch({type: 'REMOVE_TASK', payload: {id}})
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={changeInputHandler}/>
            <button onClick={() => addTodoHandler(Date.now(), inputValue)}>Add new task</button>

            <ul>
                {state.todos.map(item => {
                    return (
                        <li key={item.id}>
                            <input type="checkbox"/>
                            {item.name}
                            <button onClick={() => removeTodoHandler(item.id)}>X</button>
                        </li>)
                })}
            </ul>
        </div>
    );
};

export default Todo;