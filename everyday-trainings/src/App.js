import './App.css';
import React from "react";
import BigComponentUseEffect from "./Components/useEffect/BigComponentUseEffect/BigComponentUseEffect";
import BigComponentUseReducer from "./Components/useReducer/BigComponentUseReducer/BigComponentUseReducer";
import BigComponentContext from "./Components/context/BigComponentContext/BigComponentContext";
import BigComponentUseRef from "./Components/useRef/BigComponentUseRef/BigComponentUseRef";
import BigComponentBusinessLogic from "./Components/buisness-logic/BigComponentBusinessLogic";
import BigUseImperativeHandle from "./Components/useImperativeHandle/BigUseImperativeHandle/BigUseImperativeHandle";
import BigComponentPortals from "./Components/portals/BigComponentPortals";
import {BigClassesComponents} from "./Components/classesComponents/BigClassesComponents";
import BigComponentErrorBoundaries from "./Components/errorBoundaries/BigComponentErrorBoundaries";
import BigComponentHttp from "./Components/http-react/BigComponentHTTP";
import BigComponentUseCallback from "./Components/useCallback/BigComponentUseCallback";

function App() {
    return (
        <div className="App">
            <BigComponentUseEffect/>
            <BigComponentUseReducer/>
            <BigComponentContext/>
            <BigComponentUseRef/>
            <BigComponentBusinessLogic/>
            <BigUseImperativeHandle/>
            <BigComponentPortals/>
            <BigClassesComponents/>
            <BigComponentErrorBoundaries/>
            <BigComponentHttp/>
            <BigComponentUseCallback/>
        </div>
    );
}

export default App;
