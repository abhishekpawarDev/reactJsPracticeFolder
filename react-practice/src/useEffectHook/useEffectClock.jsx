import React, { useEffect, useState } from "react";

const UseEffectClockComponent = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            setTime(currentTime.toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 style={{fontFamily:'monospace'}}>Current Time is {time}</h1>
        </div>
    );
}

export default UseEffectClockComponent;
