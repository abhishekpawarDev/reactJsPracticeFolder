import React from "react";

const EventHandling = () => {

    function handlerButton(){
        return alert('Hello I am On Click Event')
    }

    const clickFirst = () =>{
        let user = prompt('Enter Your Name')
        user?alert(`Hello ${user} Welcome My Webside`):clickFirst();
    }

    return(
        <>
        <h1>Event Handling</h1>
        <button onClick={handlerButton}>Clich me</button>
        <button onClick={clickFirst}>Click 1</button>
        </>
    )
}

export default EventHandling;