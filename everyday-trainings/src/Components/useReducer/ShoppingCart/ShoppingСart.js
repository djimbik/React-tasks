import React, {useReducer} from 'react';
import Item from "./Item";

const initialState = {
    items: [
        { id: 1, name: 'Бананы', count: 0 },
        { id: 2, name: 'Яблоки', count: 0 },
        { id: 3, name: 'Клубника', count: 0 },
        { id: 4, name: 'Голубика', count: 0 },
        { id: 5, name: 'Нектарины', count: 0 },
    ],
    showItems: false
};

const funcReducer = (prevState, action) => {
    if (action.type === 'ADD_ITEM') {
        return {
            ...prevState,
            items: prevState.items.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            })
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...prevState,
            items: prevState.items.map(item => {
                if (item.id === action.payload.id && item.count > 0) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            })
        };
    }
    if (action.type === 'SHOW_ITEMS') {
        return {
            ...prevState,
            showItems: !prevState.showItems
        };
    }
    return prevState
}

const ShoppingСart = () => {
    const [state, dispatch] = useReducer(funcReducer, initialState)

    const addItemHandler = (id) => {
        dispatch({type: 'ADD_ITEM', payload: {id}})
    }

    const removeItemHandler = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: {id}})
    }

    const showItemsHandler = () => {
        dispatch({type: 'SHOW_ITEMS'})
    }

    return (
        <div>
            <ul>
                {state.items.map(item => (
                    <Item
                        key={item.id}
                        itemName={item.name}
                        addItemHandler={addItemHandler}
                        removeItemHandler={removeItemHandler}
                        count={item.count}
                        itemId={item.id}
                    />
                ))}
            </ul>
            <button onClick={showItemsHandler}>Показать товары</button>
            {state.showItems && (
                <div>
                    Текущие товары:
                    <ul>
                        {state.items.map(item => (
                            <li key={item.id}>{`${item.name} --- ${item.count} штук`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ShoppingСart;




























