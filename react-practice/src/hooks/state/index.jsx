import React, { useState } from "react";

const UseStateHook = () =>{
    const [count , setCount] = useState(0)
    const incrementBTN = () =>{
        setCount(count + 1);
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={incrementBTN}>Increment</button>
        </div>
    )
}

export default UseStateHook;