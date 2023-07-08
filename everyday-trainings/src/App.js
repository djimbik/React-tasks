import './App.css';
import React from "react";
import BigComponentUseEffect from "./Components/useEffect/BigComponentUseEffect/BigComponentUseEffect";
import BigComponentUseReducer from "./Components/useReducer/BigComponentUseReducer/BigComponentUseReducer";
import BigComponentContext from "./Components/context/BigComponentContext/BigComponentContext";
import BigComponentUseRef from "./Components/useRef/BigComponentUseRef/BigComponentUseRef";
import BigComponentBusinessLogic from "./Components/buisness-logic/BigComponentBusinessLogic";

function App() {
    return (
        <div className="App">
            <BigComponentUseEffect/>
            <BigComponentUseReducer/>
            <BigComponentContext/>
            <BigComponentUseRef/>
            <BigComponentBusinessLogic/>
        </div>
    );
}

export default App;
