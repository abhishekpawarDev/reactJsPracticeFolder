import React, { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "Increment") {
        if(state >= 10){
            return state;
        }else{
            return state + 1;
        }
    } else if (action.type === "Decrement") {
        if(state <= 0){
            return state
        }else{
            return state - 1; 
        }
    }if(action.type === 'Reset'){
        return state = 0;
    } else {
        return state; 
    }
};

const UseReducerHookComponent = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>{` Count is ${count}`}</h1>
            <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            <button onClick={()=>dispatch({type:'Reset'})}>Reset Count </button>
        </>
    );
};

export default UseReducerHookComponent;
