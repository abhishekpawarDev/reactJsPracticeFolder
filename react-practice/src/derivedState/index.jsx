import React, { useState } from "react";

const DerivedState = () => {
    const [user, setUser] = useState([
        { name: 'Navi', age: 22 },
        { name: 'Ravi', age: 29 },
        { name: 'Lavi', age: 25 },
    ])

    const userAveAge = Math.round(user.reduce((accumlator, currentElement) => { return accumlator + currentElement.age }, 0) / user.length);
    console.log(userAveAge);
    // userAveAge is derived state meaning his vlaeues depend on other state 
    return (
        <>
            {user.map((cE, index) => (
                <p key={index}>{cE.name} and {cE.age}</p>
            ))}
            <p>User Age Average is {userAveAge}</p>
        </>

    );
}

export default DerivedState;