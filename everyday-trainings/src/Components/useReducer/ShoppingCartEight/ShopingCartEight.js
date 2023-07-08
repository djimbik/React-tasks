import React, {useReducer} from 'react';

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
}

const cartReducer = (prevState, action) => {
    if (action.type === 'ADD_PRODUCT') {
        return {
            ...prevState,
            cartItems: [...prevState.cartItems, action.payload],
            totalItems: prevState.totalItems + 1,
            totalPrice: prevState.totalPrice + action.payload.price
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        const updatedCartItems = prevState.cartItems.filter(
            (item) => item !== action.payload
        );
        const updatedTotalItems = updatedCartItems.length;
        const updatedTotalPrice = updatedCartItems.reduce(
            (total, item) => total + item.price,
            0
        );

        return {
            ...prevState,
            cartItems: updatedCartItems,
            totalItems: updatedTotalItems,
            totalPrice: updatedTotalPrice,
        }
    }

    return prevState
}

const ShoppingCartEight = () => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    const addProductHandler = (item) => {
        dispatch({type: 'ADD_PRODUCT', payload: item})
    }

    const removeProductHandler = (item) => {
        dispatch({type: 'REMOVE_PRODUCT', payload: item})
    }

    return (
        <div>
            <p>Total price: {cartState.totalPrice}</p>
            <p>Total count: {cartState.totalItems}</p>
            {cartState.cartItems.map((item, index) => {
                return (<li key={index}>
                    {`${item.good} - ${item.price}`}
                    <button onClick={() => removeProductHandler(item)}>remove</button>
                    <button onClick={() => addProductHandler(item)}>add one more</button>
                </li>)

            })}
            <button onClick={() => addProductHandler(
                {id: 1, good: 'apple', count: 1, price: 10 })}>
                Add product 1 - apples
            </button>
            <button onClick={() => addProductHandler(
                {id: 2, good: 'strawberry', count: 1, price: 15 })}>
                Add product 2 - strawberry
            </button>
            <button onClick={() => addProductHandler(
                {id: 3, good: 'bananas', count: 1, price: 5 })}>
                Add product 3 - bananas
            </button>
        </div>
    );
};

export default ShoppingCartEight;