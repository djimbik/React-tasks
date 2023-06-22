import React, {useEffect, useRef} from 'react';

const Focus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <MyComponent value = {5}/>
        </div>

    )
};

export default Focus;

// 2 пример
function MyComponent({value}) {
    const previousValueRef = useRef(null);

    useEffect(() => {
        console.log('previousValueRef', previousValueRef)
        console.log('previousValueRef.current', previousValueRef.current)
        previousValueRef.current = value;
    }, [value]);

    return (
        <div>
            <p>Текущее значение: {value}</p>
            <p>Предыдущее значение: {previousValueRef.current}</p>
        </div>
    );
}

// 3 пример
//Получение ссылки на DOM-элемент и выполнение операций над ним:

function MyComponent2() {
    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    };

    return (
        <div>
            <video ref={videoRef} src="myvideo.mp4" />
            <button onClick={playVideo}>Воспроизвести</button>
        </div>
    );
}























