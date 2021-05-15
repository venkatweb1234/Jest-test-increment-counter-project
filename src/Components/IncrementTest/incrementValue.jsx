import React, { useState } from 'react';

const IncrementValue = () =>{
    const [count, setIncrementValue] = useState(0);
    const IncrementVal = () =>{
        setIncrementValue(count +1);
    }
    return(<div>
        <button data-testid="count" onClick={IncrementVal} title="Increment">IncrementVal {count}</button>
        <p title="ClickedIncrement">Clicked times</p>
    </div>)
}

export default IncrementValue;