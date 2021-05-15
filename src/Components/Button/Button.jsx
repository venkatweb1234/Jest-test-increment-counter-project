import React, { useState } from 'react';

const ButtonJs = () =>{
    const [Value, setValue] =useState('You clicked Here')
    const clickHandler = () =>{
        setValue('already Clicked')
    }
    return(<div><button onClick={clickHandler} title="ClickHandler">{Value}</button></div>)
}

export default ButtonJs;