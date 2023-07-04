import './App.css';
import {DateTimeComponent} from "./Components/useEffect/DateTimeComponent";
import Focus from "./Components/useRef/Focus";
import React from "react";
import TextInput from "./Components/useRef/Timer";
import ConsoleTimer from "./Components/useEffect/ConsoleTimer";
import CounterReducer from "./Components/useReducer/CounterReducer";
import FormConsole from "./Components/useRef/FormConsole";
import {ThemeProvider} from "./Components/context/changeTheme";
import ShoppingСart from "./Components/useReducer/ShoppingCart/ShoppingСart";
import Cart from "./Components/useReducer/exampleShoppingCart/ShoppingExampleCart";
import NewTimer from "./Components/useRef/newTimer";
import Notification from "./Components/useEffect/Notification";
import Main from "./Components/context/User/Main";
import UserProvider from "./Components/context/changeDataContext/Context";
import UserProfile from "./Components/context/changeDataContext/UserProfile";
import TimeAgain from "./Components/useEffect/TimeAgain";
import Todo from "./Components/useReducer/Todo/Todo";
import Tooltip from "./Components/useRef/Tooltip";
import ClickCounter from "./Components/useRef/ClickCounter";
import NewForwardTimer from "./Components/useImperativeHandle/Timer/Timer";
import BlockForTimer from "./Components/useImperativeHandle/Timer/BlockForTimer";
import BlockForForm from "./Components/useImperativeHandle/Form/BlockForForm";
import Randomizer from "./Components/useEffect/Randomizer";
import Header from "./Components/context/ThemeContext/Header";
import ThemeProvider1 from "./Components/context/ThemeContext/ThemeContext";
import SimpleForm from "./Components/useRef/SimpleForm";
import ParentCounter from "./Components/useImperativeHandle/Counter/ParentCounter";
import RomanTimer from "./Components/useEffect/romanTimer";
import RomanCounter from "./Components/useReducer/romanCounter";
import UserCard from "./Components/context/NewUser/UserCard";
import UserProfile1 from "./Components/context/NewUser/UserProfile";
import FirstTimer from "./Components/useEffect/firstTimer/FirstTimer";
import FirstTodo from "./Components/useReducer/first todo/FirstTodo";
import ModalWindow from "./Components/useRef/ModalWindow";
import SecondFocus from "./Components/useEffect/secondFocus";
import MultiLanguage from "./Components/useReducer/dualanguage/MultyLanguage";
import ChangeLangButton from "./Components/useReducer/dualanguage/ChangeLangButton";
import {LanguageContextProvider} from "./Components/useReducer/dualanguage/LanguageContext";
import ThirdTimer from "./Components/useEffect/thirdTimer/ThirdTimer";
import ThirdForm from "./Components/useReducer/thirdForm/ThirdForm";
import AppForBusinessLogic from "./Components/buisness-logic/AppForBuisnessLogic";

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <UserProvider>
                    <DateTimeComponent/>
                    <Focus/>
                    <TextInput/>
                    <ConsoleTimer/>
                    <CounterReducer/>
                    <FormConsole/>
                    <ShoppingСart/>
                    <Cart/>
                    <NewTimer/>
                    <Notification/>
                    <Main/>
                    <Tooltip/>
                    <UserProfile/>
                    <TimeAgain/>
                    <Todo/>
                    <ClickCounter/>
                    <BlockForTimer/>
                    <BlockForForm/>
                    <Randomizer/>
                    <ThemeProvider1>
                        <Header/>
                    </ThemeProvider1>
                    <SimpleForm/>
                    <ParentCounter/>
                    <RomanTimer/>
                    <RomanCounter/>
                    <UserProfile1>
                        <UserCard/>
                    </UserProfile1>
                    <FirstTimer/>
                    <FirstTodo/>
                    <ModalWindow/>
                    <SecondFocus/>
                    <LanguageContextProvider>
                        <ChangeLangButton/>
                        <MultiLanguage/>
                    </LanguageContextProvider>
                    <ThirdTimer/>
                    <ThirdForm/>
                    <AppForBusinessLogic/>
                </UserProvider>
            </ThemeProvider>

        </div>
    );
}

export default App;
