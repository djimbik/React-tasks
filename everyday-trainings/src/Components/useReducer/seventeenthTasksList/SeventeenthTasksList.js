import React, {useReducer, useState} from 'react';

const initialState = {
    todos: [
        {id: 1, text: 'first task for React', isDone: false}
    ]
}

const taskReducer = (prevState, actions) => {

}

const SeventeenthTasksList = () => {
    const [taskList, dispatch] = useReducer(taskReducer, initialState);
    const [inputText, setInputText] = useState('')


    const addTaskHandler = () => {

    }

    return (
        <React.Fragment>
            <form action="">
                <input type="text" />
                <button>add task</button>
            </form>
            <ul>
                {taskList.todos.map(item => {

                    return (
                        <li key={item.id}>
                            <input type="checkbox"/>
                            <span> {item.text} </span>
                            <button>X</button>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    );
};

export default SeventeenthTasksList;