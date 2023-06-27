import React, { useReducer } from 'react';

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.payload.price,
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - action.payload.price,
            };
        default:
            return state;
    }
};

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    return (
        <div>
            <h2>Cart</h2>
            <p>Total Items: {state.totalItems}</p>
            <p>Total Price: {state.totalPrice}</p>
            <ul>
                {state.cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>
                Add Product 1
            </button>
            <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}>
                Add Product 2
            </button>
        </div>
    );
};

export default Cart;