import React, {useState} from 'react';
import ClickCounter from "../ClickCounter";
import Fifthlist from "../Fifthlist";
import Focus from "../Focus";
import FormConsole from "../FormConsole";
import ModalWindow from "../ModalWindow";
import NewTimer from "../newTimer";
import SimpleForm from "../SimpleForm";
import TextInput from "../Timer";
import Tooltip from "../Tooltip";
import TaskWrapper from "../../useEffect/BigComponentUseEffect/TaskWrapper";

const BigComponentUseRef = () => {
    const [isOpenTasks, setIsOpenTasks] = useState({
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
                         title={'Задача 1, тема: useRef'}>
                <div>
                    <ClickCounter/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('secondTask')}
                         isTaskOpen={isOpenTasks.secondTask}
                         title={'Задача 2, тема: useRef'}>
                <div>
                    <Fifthlist/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('thirdTask')}
                         isTaskOpen={isOpenTasks.thirdTask}
                         title={'Задача 3, тема: useRef'}>
                <div>
                    <Focus/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fourthTask')}
                         isTaskOpen={isOpenTasks.fourthTask}
                         title={'Задача 4, тема: useRef'}>
                <div>
                    <FormConsole/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fifthTask')}
                         isTaskOpen={isOpenTasks.fifthTask}
                         title={'Задача 5, тема: useRef'}>
                <div>
                    <ModalWindow/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('sixthTask')}
                         isTaskOpen={isOpenTasks.sixthTask}
                         title={'Задача 6, тема: useRef'}>
                <div>
                    <NewTimer/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('seventhTask')}
                         isTaskOpen={isOpenTasks.seventhTask}
                         title={'Задача 7, тема: useRef'}>
                <div>
                    <SimpleForm/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('eightTask')}
                         isTaskOpen={isOpenTasks.eightTask}
                         title={'Задача 8, тема: useRef'}>
                <div>
                    <TextInput/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('ninthTask')}
                         isTaskOpen={isOpenTasks.ninthTask}
                         title={'Задача 9, тема: useRef'}>
                <div>
                    <Tooltip/>
                </div>
            </TaskWrapper>
        </div>
    );
};

export default BigComponentUseRef;