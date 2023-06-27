import './App.css';
import {DateTimeComponent} from "./Components/useEffect/DateTimeComponent";
import Focus from "./Components/useRef/Focus";
import React from "react";
import TextInput from "./Components/useRef/Timer";
import Dropdown from "./Components/useRef/Dropdown";
import ConsoleTimer from "./Components/useEffect/ConsoleTimer";
import CounterReducer from "./Components/useReducer/CounterReducer";
import FormConsole from "./Components/useRef/FormConsole";
import {ThemeProvider} from "./Components/context/changeTheme";
import ShoppingСart from "./Components/useReducer/ShoppingCart/ShoppingСart";
import Cart from "./Components/useReducer/exampleShoppingCart/ShoppingExampleCart";
import NewTimer from "./Components/useRef/newTimer";
import Notification from "./Components/useEffect/Notification";

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <DateTimeComponent/>
                <Focus/>
                <TextInput/>
                <Dropdown/>
                <ConsoleTimer/>
                <CounterReducer/>
                <FormConsole/>
                <ShoppingСart/>
                <Cart/>
                <NewTimer/>
                <Notification/>
            </ThemeProvider>

        </div>
    );
}

export default App;
