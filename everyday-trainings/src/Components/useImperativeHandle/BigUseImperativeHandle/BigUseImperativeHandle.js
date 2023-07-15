import React, {useState} from 'react';
import TaskWrapper from "../../useEffect/BigComponentUseEffect/TaskWrapper";
import ParentCounter from "../Counter/ParentCounter";
import FifteenCounter from "../FifteenCounter/FifteenCounter";
import BlockForForm from "../Form/BlockForForm";
import SaveButton from "../SaveButton/SaveButton";
import BlockForTimer from "../Timer/BlockForTimer";

const BigUseImperativeHandle = () => {
    const [isOpenTasks, setIsOpenTasks] = useState({
        zeroTask: false,
        firstTask: false,
        secondTask: false,
        thirdTask: false,
        fourthTask: false,
        fifthTask: false,
        sixthTask: false,
        seventhTask: false,
        eightTask: false,
        ninthTask: false
    })

    const toggleTask = (task) => {
        setIsOpenTasks(prevState => ({
            ...prevState,
            [task]: !prevState[task]
        }))
    }

    return (
        <div>
            <TaskWrapper onToggle={() => toggleTask('firstTask')}
                         isTaskOpen={isOpenTasks.firstTask}
                         title={'Задача 1, тема: useImperativeHandle'}>
                <div>
                    <ParentCounter/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('secondTask')}
                         isTaskOpen={isOpenTasks.secondTask}
                         title={'Задача 2, тема: useImperativeHandle'}>
                <div>
                    <FifteenCounter/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('thirdTask')}
                         isTaskOpen={isOpenTasks.thirdTask}
                         title={'Задача 3, тема: useImperativeHandle'}>
                <div>
                    <BlockForForm/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fourthTask')}
                         isTaskOpen={isOpenTasks.fourthTask}
                         title={'Задача 4, тема: useImperativeHandle'}>
                <div>
                    <SaveButton/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fifthTask')}
                         isTaskOpen={isOpenTasks.fifthTask}
                         title={'Задача 5, тема: useImperativeHandle'}>
                <div>
                    <BlockForTimer/>
                </div>
            </TaskWrapper>
        </div>
    );
};

export default BigUseImperativeHandle;