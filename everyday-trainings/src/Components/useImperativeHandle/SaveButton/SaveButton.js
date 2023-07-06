import React, {useRef} from 'react';
import ChildComponent from "./ChildComponent";

const SaveButton = () => {
    const saveRef = useRef();

    const saveValueHandler = () => {
        saveRef.current.save();
    }

    return (
        <div>
            <ChildComponent ref={saveRef}/>
            <button onClick={saveValueHandler}>Сохранить</button>
        </div>
    );
};

export default SaveButton;