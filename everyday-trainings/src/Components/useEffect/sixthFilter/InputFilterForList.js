import React, {useEffect, useState} from 'react';

const incubNames = [
    {id: 1, name: "Дима"},
    {id: 2, name: "Коля"},
    {id: 3, name: "Сергей"},
    {id: 4, name: "Димид"},
]

const InputFilterForList = () => {
    const [names, setInputNames] = useState(incubNames)
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputNames(incubNames.filter(item => item.name.includes(inputValue)))
    }, [inputValue])

    const onChangeHandler = (evt) => {
        setInputValue(evt.target.value)
    }

    const filteredNames = names.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            <input type="search" onChange={onChangeHandler}/>
            <ul>
                {filteredNames}
            </ul>
        </div>
    );
};

export default InputFilterForList;