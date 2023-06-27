import React from 'react';

const Item = ({itemName, addItemHandler, removeItemHandler, count, itemId}) => {
    return (
        <li>
            <span>{itemName}---{count}</span>
            <button onClick={() => addItemHandler(itemId)}>добавить товар</button>
            <button onClick={() => removeItemHandler(itemId)}>удалить товар</button>
        </li>
    );
};

export default Item;