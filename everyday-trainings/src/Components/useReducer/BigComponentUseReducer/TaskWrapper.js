import React from 'react';
import styles from "./BigComponentUseReducer.module.css";

const TaskWrapper = ({title, onToggle, isTaskOpen, children}) => {
    return (
        <div className={styles.taskBlock}>
            <h3>{title}</h3>
            <button onClick={onToggle}>{isTaskOpen ? 'Скрыть итог решения' : 'Показать итог решения'}</button>
            {isTaskOpen && children}
        </div>
    );
};

export default TaskWrapper;