import React, {useState} from 'react';
import CounterReducer from "../CounterReducer";
import {LanguageContextProvider} from "../dualanguage/LanguageContext";
import ChangeLangButton from "../dualanguage/ChangeLangButton";
import MultiLanguage from "../dualanguage/MultyLanguage";
import Cart from "../exampleShoppingCart/ShoppingExampleCart";
import FirstTodo from "../first todo/FirstTodo";
import ThirdForm from "../thirdForm/ThirdForm";
import Todo from "../Todo/Todo";
import ShoppingСart from "../ShoppingCart/ShoppingСart";
import {ThemeProvider} from "../../context/changeTheme";
import TaskWrapper from "../../useEffect/BigComponentUseEffect/TaskWrapper";
import ShoppingCartEight from "../ShoppingCartEight/ShopingCartEight";

const BigComponentUseReducer = () => {
    const [isOpenTasks, setIsOpenTasks] = useState({
        firstTask: false,
        secondTask: false,
        thirdTask: false,
        fourthTask: false,
        fifthTask: false,
        sixthTask: false,
        seventhTask: false,
        eightTask: false,
        ninthTask: false,
        tenthTask: false
    })

    const toggleTask = (task) => {
        setIsOpenTasks(prevState => ({
            ...prevState,
            [task]: !prevState[task]
        }))
    }

    const taskComponents = [
        {
            id: 'firstTask',
            title: 'Задача 1, тема: useReducer',
            component: (
                <div>
                    <ThemeProvider>
                        <CounterReducer />
                    </ThemeProvider>
                </div>
            ),
        },
        {
            id: 'secondTask',
            title: 'Задача 2, тема: useReducer',
            component: (
                <div>
                    <LanguageContextProvider>
                        <ChangeLangButton />
                        <MultiLanguage />
                    </LanguageContextProvider>
                </div>
            ),
        },
        {
            id: 'thirdTask',
            title: 'Задача 3, тема: useReducer',
            component: (
                <div>
                    <Cart />
                </div>
            ),
        },
        {
            id: 'fourthTask',
            title: 'Задача 4, тема: useReducer',
            component: (
                <div>
                    <FirstTodo />
                </div>
            ),
        },
        {
            id: 'fifthTask',
            title: 'Задача 5, тема: useReducer',
            component: (
                <div>
                    <FirstTodo />
                </div>
            ),
        },
        {
            id: 'sixthTask',
            title: 'Задача 6, тема: useReducer',
            component: (
                <div>
                    <ThirdForm />
                </div>
            ),
        },
        {
            id: 'seventhTask',
            title: 'Задача 7, тема: useReducer',
            component: (
                <div>
                    <FirstTodo />
                </div>
            ),
        },
        {
            id: 'eightTask',
            title: 'Задача 8, тема: useReducer',
            component: (
                <div>
                    <Todo />
                </div>
            ),
        },
        {
            id: 'ninthTask',
            title: 'Задача 9, тема: useReducer',
            component: (
                <div>
                    <ShoppingСart />
                </div>
            ),
        },
        {
            id: 'tenthTask',
            title: 'Задача 10, тема: useReducer, сложность 75 / 100',
            component: (
                <div><ShoppingCartEight/></div>
            ),
        },
    ];

    return (
        <div>
            {taskComponents.map((task) => (
                <TaskWrapper
                    key={task.id}
                    onToggle={() => toggleTask(task.id)}
                    isTaskOpen={isOpenTasks[task.id]}
                    title={task.title}
                >
                    {task.component}
                </TaskWrapper>
            ))}
        </div>
    );
};

export default BigComponentUseReducer;