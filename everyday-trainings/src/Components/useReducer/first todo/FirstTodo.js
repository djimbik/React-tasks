import React, {useReducer, useState} from 'react';
import styles from './FirstTodo.module.css'

const initialState = {
    todos: [
        {id: 1, text: 'Ежедневные задания на React', isDone: false},
    ]
}

const todoReducer = (prevState, actions) => {
    if (actions.type === 'DELETE_TASK') {
        const newTodos = prevState.todos.filter(item => item.id !== actions.payload.id)

        return {
            ...prevState,
            todos: [...newTodos]
        }
    }
    if (actions.type === 'ADD_TASK') {
        return {
            ...prevState,
            todos: [...prevState.todos,
                {id: actions.payload.id,
                text: actions.payload.text,
                isDone: false}
            ]
        }
    }
    if (actions.type === 'DONE_TASK') {
        const updatedTodos = prevState.todos.map(item => {
            if (item.id === actions.payload.id) {
                return {
                    ...item,
                    isDone: !item.isDone
                };
            }
            return item;
        });

        return {
            ...prevState,
            todos: updatedTodos
        }
    }
    return prevState
}

const FirstTodo = () => {
    const [text, setText] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const deleteTask = (id) => {
        dispatch({type: 'DELETE_TASK', payload: {id}})
    }

    const addTask = (id, text) => {
        dispatch({type: 'ADD_TASK', payload: {id, text}})
    }

    const toggleTaskStatus = (id) => {
        dispatch({ type: 'DONE_TASK', payload: { id } });
    };

    const changeInputText = (evt) => {
        setText(evt.target.value)
    }

    const formSubmitHandler = (evt) => {
        evt.preventDefault()
        addTask(Date.now(), text)
    }


    return (
        <React.Fragment>
            <form onSubmit={formSubmitHandler}>
                <input type="text" onChange={changeInputText} value={text}/>
                <button>Добавить задачу</button>
            </form>
            <ul>
                {state.todos.map(item => {
                    const deleteTaskHandler = () => deleteTask(item.id);
                    const taskClassName = item.isDone ? styles.done : '';
                    const toggleCheckboxHandler =  () => toggleTaskStatus(item.id)

                    return (
                        <li key={item.id} className={taskClassName}>
                            <input type="checkbox" onChange={toggleCheckboxHandler}/>
                            {item.text}
                            <button onClick={deleteTaskHandler}>X</button>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    );
};

export default FirstTodo;