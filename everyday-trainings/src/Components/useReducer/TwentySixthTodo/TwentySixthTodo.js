import React, {useReducer, useState} from 'react';

const initialState = {
    todos: [
        {id: 1, text: 'Go-go, one more', isDone: false}
    ]
}

const todoReducer = (prevState, action) => {
    if (action.type === 'ADD_TASK') {
        return {
            ...prevState,
            todos: [...prevState.todos, action.payload]
        }
    }

    if (action.type === 'REMOVE_TASK') {
        return {
            ...prevState,
            todos: [...prevState.todos.filter(item => item.id !== action.payload)]
        }
    }

    return prevState
}

const TwentySixthTodo = () => {
    const [todo, dispatch] = useReducer(todoReducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const addTask = (item) => {
        dispatch({type: 'ADD_TASK', payload: item})
    }

    const removeTask = (id) => {
        dispatch({type: 'REMOVE_TASK', payload: id})
    }

    const inputOnChangeHandler = (evt) => {
        setInputValue(evt.target.value)
    }

    const formSubmitHandler = (evt) => {
        evt.preventDefault()
        addTask({id: Date.now(), text: inputValue, isDone:false})
    }

    return (
        <div>
            <form action="" onSubmit={formSubmitHandler}>
                <input type="text" value={inputValue} onChange={inputOnChangeHandler}/>
                <button>add task</button>
            </form>
            <ul>
                {todo.todos.map(item => {
                    return (
                        <li key={item.id}>
                            <input type="checkbox"/>
                            <span>{item.text}</span>
                            <button onClick={() => removeTask(item.id)}> X </button>
                        </li>
                    )}
                )}
            </ul>
            
        </div>
    );
};

export default TwentySixthTodo;