import React, {useState} from 'react';
import {DateTimeComponent} from "../DateTimeComponent";
import {ThemeProvider} from "../../context/changeTheme";
import Notification from "../Notification";
import Randomizer from "../Randomizer";
import SecondFocus from "../secondFocus";
import InputFilterForList from "../sixthFilter/InputFilterForList";
import SeventhWindow from "../SeventhWindow/SeventhWindow";
import TaskWrapper from "./TaskWrapper";
import SixteenthFilter from "../sixteenthSearch/SixteenthFilter";
import SeventeenthTimer from "../SevententhTimer/SevententhTimer";
import TwentySixthCounter from "../TwentySixthCounter/TwentySixthCounter";

const BigComponentUseEffect = () => {
    const [isOpenTasks, setIsOpenTasks] = useState({
        firstTask: false,
        secondTask: false,
        thirdTask: false,
        fourthTask: false,
        fifthTask: false,
        sixthTask: false,
        seventhTask: false,
        eighthTask: false,
        ninthTask: false,
    })

    const toggleTask = (task) => {
        console.log('test')
        setIsOpenTasks(prevState => ({
            ...prevState,
            [task]: !prevState[task]
        }))
    }

    return (
        <div>
            <TaskWrapper onToggle={() => toggleTask('firstTask')}
                         isTaskOpen={isOpenTasks.firstTask}
                         title={'Задача 1, тема: useEffect'}>
                <div>
                    <ThemeProvider>
                        <DateTimeComponent/>
                    </ThemeProvider>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('secondTask')}
                         isTaskOpen={isOpenTasks.secondTask}
                         title={'Задача 2, тема: useEffect'}>
                <div>
                    <Notification/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('thirdTask')}
                         isTaskOpen={isOpenTasks.thirdTask}
                         title={'Задача 3, тема: useEffect'}>
                <div>
                    <Randomizer/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fourthTask')}
                         isTaskOpen={isOpenTasks.fourthTask}
                         title={'Задача 4, тема: useEffect'}>
                <div>
                    <SecondFocus/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fifthTask')}
                         isTaskOpen={isOpenTasks.fifthTask}
                         title={'Задача 5, тема: useEffect - поиск из input'}>
                <div>
                    <InputFilterForList/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('sixthTask')}
                         isTaskOpen={isOpenTasks.sixthTask}
                         title={'Задача 6, тема: useEffect - ширина и высота окна'}>
                <div>
                    <SeventhWindow/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('seventhTask')}
                         isTaskOpen={isOpenTasks.seventhTask}
                         title={'Задача 7, тема: useEffect - ширина и высота окна'}>
                <div>
                    <SixteenthFilter/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('eighthTask')}
                         isTaskOpen={isOpenTasks.eighthTask}
                         title={'Задача 8, тема: useEffect - таймер обратного отсчета - 70/100'}>
                <div>
                    <SeventeenthTimer/>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('ninthTask')}
                         isTaskOpen={isOpenTasks.ninthTask}
                         title={'Задача 9, тема: useEffect - счетчик - 70/100'}>
                <div>
                    <TwentySixthCounter/>
                </div>
            </TaskWrapper>
        </div>
    );
};

export default BigComponentUseEffect;