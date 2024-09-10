import React, { useState, useEffect } from 'react';

function SearchBook({ setListState, listState }) {
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        
        let filteredBooks = listState.filter(book =>
            book.title.toLowerCase().includes(newValue.toLowerCase())
        );

        if(inputValue.length <= 1){
            filteredBooks = JSON.parse(localStorage.getItem('books'))
        } 

        setListState(filteredBooks);
    };

   


    return (
        <input
            className="search"
            type="text"
            placeholder="Buscar"
            name="search"
            autoCapitalize="off"
            autoSave="off"
            value={inputValue}
            onChange={handleInputChange}
        />
    );
}

export default SearchBook;
