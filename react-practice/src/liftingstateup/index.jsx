// Why Lift State Up?
//  When two or more components need to share or update the same piece of data, it’s better to keep that state in their nearest common ancestor.

import React, { useState } from "react"
const LiftingStateUp = () =>{
    const [value , setValue] = useState('')
    return(
        <>
        <InputComponent value={value} setValue={setValue}/>
        <DisplayComponenrt value={value}/>
        </>
    )
}

export const InputComponent = ({value , setValue}) =>{

    return(
        <>
        <input type="text" placeholder="Enter Anything" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        </>
        
    )
}

export const DisplayComponenrt = ({value}) =>{
    return(
        <>
    <p>Hello .....{value}</p>
    </>
    )
}
export default LiftingStateUp;