import React, { useEffect, useState } from "react";
function FuncIncrement(){

const[Inc,setInc] = useState(0)
 
const Increment = ()=>{
    setInc(Inc+1)
}
setInterval(Increment,1000)

useEffect(()=>{
    const Interval = setInterval(Increment,1000)
})
    return(
        <div>
            <h1>{Inc}</h1>
        </div>
    )
}
export default FuncIncrement