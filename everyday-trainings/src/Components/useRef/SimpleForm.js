import React, {useRef, useState} from 'react';

const SimpleForm = () => {
    const formRef = useRef(null)
    const [list, setList] = useState([]);

    const addListItemHandler = (evt) => {
        evt.preventDefault();
        const inputValue = formRef.current.value.trim();
        if (inputValue !== "") {
            setList(prevState => [...prevState, {id: Date.now(), text: formRef.current.value}])
        }
        formRef.current.value = "";
    }

    return (
        <form onSubmit={addListItemHandler}>
            <input type="text" ref={formRef}/>
            <button>Отправить</button>
            <ul>
                {list.map(item => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </form>
    );
};

export default SimpleForm;