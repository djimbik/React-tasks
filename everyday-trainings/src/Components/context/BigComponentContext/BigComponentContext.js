import React, {useState} from 'react';
import UserProvider from "../changeDataContext/Context";
import UserProfile from "../changeDataContext/UserProfile";
import FifthHeader from "../FifthTheme/FifthHeader";
import {ThemeContextProvider} from "../FifthTheme/ThemeContext";
import UserCard from "../NewUser/UserCard";
import UserProfile1 from "../NewUser/UserProfile";
import {SixthThemeContextProvider} from "../Sixth Theme/SixthTheme";
import BlockForSixthContext from "../Sixth Theme/BlockForSixthContext";
import ThemeProvider1 from "../ThemeContext/ThemeContext";
import Header from "../ThemeContext/Header";
import TaskWrapper from "../../useEffect/BigComponentUseEffect/TaskWrapper";
import FifteenthHeader from "../fifteenthContext/FifteenthHeader";
import {FifteenthContextProvider} from "../fifteenthContext/FifteenthContext";
import BlockForTwentyNineTheme from "../TwentyNineTheme/BlockForTwentyNineTheme";
import {ThemeContextProvider29} from "../TwentyNineTheme/TwentyNineTheme";

const BigComponentContext = () => {
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
                         title={'Задача 1, тема: Context'}>
                <div>
                    <UserProvider>
                        <UserProfile/>
                    </UserProvider>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('secondTask')}
                         isTaskOpen={isOpenTasks.secondTask}
                         title={'Задача 2, тема: Context'}>
                <div>
                    <ThemeContextProvider>
                        <FifthHeader/>
                    </ThemeContextProvider>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('thirdTask')}
                         isTaskOpen={isOpenTasks.thirdTask}
                         title={'Задача 3, тема: Context'}>
                <div>
                    <UserProfile1>
                        <UserCard/>
                    </UserProfile1>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fourthTask')}
                         isTaskOpen={isOpenTasks.fourthTask}
                         title={'Задача 4, тема: Context'}>
                <div>
                    <SixthThemeContextProvider>
                        <BlockForSixthContext/>
                    </SixthThemeContextProvider>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('fifthTask')}
                         isTaskOpen={isOpenTasks.fifthTask}
                         title={'Задача 5, тема: Context'}>
                <div>
                    <ThemeProvider1>
                        <Header/>
                    </ThemeProvider1>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('sixthTask')}
                         isTaskOpen={isOpenTasks.sixthTask}
                         title={'Задача 6, тема: Context'}>
                <div>
                    <FifteenthContextProvider>
                        <FifteenthHeader/>
                    </FifteenthContextProvider>
                </div>
            </TaskWrapper>

            <TaskWrapper onToggle={() => toggleTask('seventhTask')}
                         isTaskOpen={isOpenTasks.seventhTask}
                         title={'Задача 7, тема: Context'}>
                <div>
                    <ThemeContextProvider29>
                        <BlockForTwentyNineTheme/>
                    </ThemeContextProvider29>
                </div>
            </TaskWrapper>
        </div>
    );
};

export default BigComponentContext;