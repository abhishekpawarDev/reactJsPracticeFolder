import React, { useState } from "react";

const UseStateHooks = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const incrementBtn = () => {
        const numericValue = num === "" ? 0 : Number(num);
        if(count >= 100){
            setCount(100);
        }else if(count < 0){
            setCount(0);
        }else{
            setCount(count + (numericValue === 0 ? 1 : numericValue));
        }
    };

    const decrementBtn = () => {
        const numericValue = num === "" ? 0 : Number(num); 
        if(count <= 0){
            setCount(0);
        }else if(count > 100){
            setCount(100);
        }else{
            setCount(count - (numericValue === 0 ? 1 : numericValue));
        }
    };
    const clearBtn = () =>{
        setCount(0)
    }
    return (
        <div>
            <p style={{fontSize:'40px', textAlign:'center'}}>{count}</p>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                style={{
                    width:'80%',
                    display:'block',
                    margin:'auto',
                    height:'30px',
                    borderWidth:3,
                    borderRadius:5,
                    marginBottom:'20px'
                }}
            />
            <button onClick={incrementBtn}
            style={{
                width:'25%',
                marginLeft:'100px',
                height:'30px',
                fontSize:'20px',
                fontWeight:'bold',
                backgroundColor:'green',
                borderRadius:5,
            }}

            >Increment Button</button>
            <button onClick={decrementBtn}
            style={{
                width:'25%',
                marginLeft:'100px',
                height:'30px',
                fontSize:'20px',
                fontWeight:'bold',
                backgroundColor:'red',
                borderRadius:5,
            }}

            >Decrement Button</button>
            <button onClick={clearBtn}
            style={{
                width:'25%',
                marginLeft:'100px',
                height:'30px',
                fontSize:'20px',
                fontWeight:'bold',
                backgroundColor:'blue',
                borderRadius:5,
            }}

            >Clear Button</button>
            <h1>Done !</h1>
        </div>
    );
};

// const styles = {

// }

export default UseStateHooks;
