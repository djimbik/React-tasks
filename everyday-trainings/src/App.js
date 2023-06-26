import './App.css';
import {DateTimeComponent} from "./Components/useEffect/DateTimeComponent";
import Focus from "./Components/useRef/Focus";
import React from "react";
import TextInput from "./Components/useRef/Timer";
import Dropdown from "./Components/useRef/Dropdown";
import ConsoleTimer from "./Components/useEffect/ConsoleTimer";
import CounterReducer from "./Components/useReducer/CounterReducer";
import FormConsole from "./Components/useRef/FormConsole";

function App() {
    return (
        <div className="App">
            <DateTimeComponent/>
            <Focus/>
            <TextInput/>
            <Dropdown/>
            <ConsoleTimer/>
            <CounterReducer/>
            <FormConsole/>
        </div>
    );
}

export default App;
