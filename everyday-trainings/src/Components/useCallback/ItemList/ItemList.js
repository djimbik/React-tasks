import React from 'react';

const ItemList = ({products}) => {
    return (
        <div>
            <ul>
                {products.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
};

export default ItemList;