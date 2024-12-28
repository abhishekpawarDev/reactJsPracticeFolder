import React, { useReducer } from "react";

const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };
        case "Decrement":
            return { count: state.count - 1 };
        case "Reset":
            return { count: 0 }; // Correctly reset state immutably
        default:
            return state;
    }
};

const UseReducerAdv = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{`Count is ${state.count}`}</h1>
            <button onClick={() => dispatch({ type: "Increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "Decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "Reset" })}>
                Reset Count
            </button>
        </>
    );
};

export default UseReducerAdv;
