import React, { useEffect, useState } from "react";

const UseEffectHookComponent = () =>{
    const [count , setCount] = useState(0);
    useEffect(()=>{
       console.log(count);
       document.title = count
    },[count])
    return(
        <div>
        <h1>hello useEffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffectHookComponent;