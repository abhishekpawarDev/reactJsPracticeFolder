import React, { useState } from "react";

const RegistatioFormReact = () =>{
    const [user, setUser]= useState({
        firstName:'',
        lastName:'',
        userEmail:'',
        userMobileNumber:''
    });

    const handlerInputChange = (e) =>{
        const {name , value} = e.target;
        setUser((prev)=>({...prev , [name]:value}))
    }
const formSubmit = () =>{
    user?alert('data submit sucessfully'):null    
}

const showData = () =>{
    console.log(user);
    
}
    return(
        <div>
            <form onSubmit={formSubmit}>
                <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={user.firstName}
                onChange={handlerInputChange}
                required
                />

                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={user.lastName}
                onChange={handlerInputChange}
                required
                />

                <input 
                type="email" 
                name="userEmail" 
                id="userEmail" 
                value={user.userEmail}
                onChange={handlerInputChange}
                required
                />
                <input 
                type="number" 
                name="userMobileNumber" 
                id="userMobileNumber" 
                value={user.userMobileNumber}
                onChange={handlerInputChange}
                required
                />
                <button type="submit">Submit Here</button>

            </form>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.userEmail}</p>
            <p>{user.userMobileNumber}</p>
            <button onClick={showData}>Console Data</button>
        </div>
    )
}

export default RegistatioFormReact ;