import React, { useState } from "react";

const ToogleBtnProject = () => {
    const[toogle , setToogle] = useState(true)
    return(
        <div>
        <button style={{width:'300px' , 
            height:'300px', 
            fontSize:'70px', 
            fontWeight:'bold' ,  
            backgroundColor: toogle ? 'green' : 'red',
            borderRadius:'50%',
            textAlign:'center',
        }} 
            onClick={()=>setToogle(!toogle)}
            >
            {toogle?'Switch on':'Switch of'}
            </button>
        </div>
    )
}



export default ToogleBtnProject;