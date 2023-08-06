import React, {useState} from 'react';

const FifthCard = () => {
    const [items, setItems] = useState([
        {id: 1, text: 'Яблоки', count: 1},
    ])
    const [itemText, setItemText] = useState('')

    const onChangeInputText = (evt) => {
        setItemText(evt.target.value);
    }

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        setItems(prevState => {
            return [...prevState, {id: Date.now(), text: itemText, count: 1}]
        })

        setItemText('')
    }

    const increaseCountHandler = (id) => {
        setItems(prevState => {
            return prevState.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })
        })
    }

    const decreaseCountHandler = (id) => {
        setItems(prevState => {
            return prevState.map(item => {
                if (id === item.id) {
                    const updatedCount = item.count - 1;
                    if (updatedCount <= 0) {
                        return null;
                    }
                    return {
                        ...item,
                        count: updatedCount
                    }
                }
                return item
            }).filter(Boolean);
        })
    }

    const deleteItem = (id) => {
        setItems(prevState => {
            return [...prevState.filter(item => item.id !== id)]
        })
    }

    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <input type="text" onChange={onChangeInputText} value={itemText}/>
                <button>Добавить товар</button>
            </form>
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        <span>{item.text} </span>
                        <span>{item.count} </span>
                        <button onClick={() => increaseCountHandler(item.id)}>+</button>
                        <button onClick={() => decreaseCountHandler(item.id)}>-</button>
                        <button onClick={() => deleteItem(item.id)}>Удалить товар полностью</button>
                    </li>)}
            </ul>
        </div>
    );
};

export default FifthCard;