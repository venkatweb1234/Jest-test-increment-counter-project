import React, { useState } from 'react';

const SearchJs = () =>{
    const [inputValue, setInputValue] =useState('You searched Value here')
    const handleChange = (event) =>{
        setInputValue(event.target.value)
    }
    return(<div><input type="text" onChange={handleChange} title="Search Click"/></div>)
}

export default SearchJs;