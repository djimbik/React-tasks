import React from 'react';
import styles from './TaskList.module.css'

const TaskList = ({tasks, onTaskClick, setTasks}) => {

    const tasksNames = tasks.map(item => {
        let statusClass = '';
        if (item.status === 'in progress') {
            statusClass = styles.blue;
        } else if (item.status === 'done') {
            statusClass = styles.green;
        } else {
            statusClass = styles.orange;
        }

        const onTaskClickHandler = () => {
            onTaskClick(item.id)
        }

        return (
            <tr key={item.id}>
                <td onClick={onTaskClickHandler} key={`title-${item.id}`}>{item.title}</td>
                <td key={`description-${item.id}`}>{item.description}</td>
                <td className={`${styles.statusCell} ${statusClass}`} key={`status-${item.id}`}>{item.status}</td>
            </tr>
        )
    })

    const handleSortByStatus = () => {
        const sortedTasksByStatus = [...tasks].sort((a, b) => a.status.localeCompare(b.status))
        setTasks(sortedTasksByStatus)
    }

    const handleSortByName = () => {
        const sortedTasksByName = [...tasks].sort((a, b) => a.title.localeCompare(b.title))
        setTasks(sortedTasksByName)
    }


    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th onClick={handleSortByName}>Название задачи</th>
                <th>Описание задачи</th>
                <th onClick={handleSortByStatus}>Статус</th>
            </tr>
            </thead>
            <tbody>
            {tasksNames}
            </tbody>
        </table>
    );
};

export default TaskList;