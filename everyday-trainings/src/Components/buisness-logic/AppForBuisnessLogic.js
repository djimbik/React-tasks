import React, {useState} from 'react';
import TaskList from "./TaskList/TaskList";

export const TASKS_STATUSES = {
    inProgress: 'in progress',
    done: 'done',
    notStarted: 'in planning'
}

const AppForBusinessLogic = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'learning a php',
            description: 'I will learn php today for 20 minutes',
            status: TASKS_STATUSES.inProgress
        },
        {
            id: 3,
            title: 'learning an OOP JS',
            description: 'I will learn OOP JS today for 55 minutes',
            status: TASKS_STATUSES.done
        },
        {
            id: 2,
            title: 'learning a React',
            description: 'I will learn php today for 2h 20 minutes',
            status: TASKS_STATUSES.inProgress
        },
    ])

    const onTaskClick = (id) => {
        console.log(id)
    }

    return (
        <TaskList tasks={tasks} setTasks={setTasks} onTaskClick={onTaskClick}>

        </TaskList>
    );
};

export default AppForBusinessLogic;