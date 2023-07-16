import React, {useEffect, useState} from 'react';

const unfilteredNames = [
    {id: 1, name: 'Roma'},
    {id: 2, name: 'Gleb'},
    {id: 3, name: 'Arthur'},
    {id: 4, name: 'Oleg'}
]

const SixteenthFilter = () => {
    const [text, setText] = useState('');
    const [names, setNames] = useState(unfilteredNames);

    useEffect(() => {
        const filteredNames = unfilteredNames.filter(item => item.name.includes(text))

        setNames(filteredNames)
    }, [text])

    const onChangeInputHandler = (evt) => {
        setText(evt.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChangeInputHandler}/>
            <ul>
                {names.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
};

export default SixteenthFilter;