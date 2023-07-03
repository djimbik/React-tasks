import React, {useContext, useEffect, useReducer, useRef} from 'react';

const initialState = {
    time: new Date().toLocaleTimeString()
}

const timerReducer = (prevState, action) => {
    if (action.type === 'REFRESH_TIME') {
        return {
            ...prevState,
            time: new Date().toLocaleTimeString()
        }
    }

    return prevState
}


const ThirdTimer = () => {
    const [state, dispatch] = useReducer(timerReducer, initialState);
    const timerRef = useRef(null)

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({type: 'REFRESH_TIME'})
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <React.Fragment>
            <div ref={timerRef}>
                {state.time}
            </div>
        </React.Fragment>
    );
};

export default ThirdTimer;