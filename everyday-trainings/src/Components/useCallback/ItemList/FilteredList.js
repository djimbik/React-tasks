import React, {useCallback, useEffect, useState} from 'react';
import ItemList from "./ItemList";

const FilteredList = () => {
    const initialProduct = [
        {id: 1, name: 'яблоки'},
        {id: 2, name: 'апельсинчики'},
        {id: 3, name: 'киви'},
        {id: 4, name: 'бананы'},
    ]

    const [products, setProducts] = useState(initialProduct)
    const [inputText, setInputText] = useState('')

    const inputChangeHandler = useCallback((evt) => {
        const filterText = evt.target.value
        setInputText(filterText);
    }, [])

    useEffect(() => {
        const filteredProducts = initialProduct.filter(item => item.name.includes(inputText))
        setProducts(filteredProducts)

    }, [inputText])

    return (
        <div>
            <input type="text" value={inputText} onChange={inputChangeHandler}/>
            <ItemList products={products}/>
        </div>
    );
};

export default FilteredList;