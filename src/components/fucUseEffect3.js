import React, { useEffect, useState } from "react";
function FuncUseEffect3(){
    const[x, setX] = useState(0)
    const[y,setY] = useState(0)
    
    // console.log("Component mounted")
    useEffect(()=>{
        console.log("Component created")
        window.addEventListener('mousemove',(e)=>{setX(e.clientX);setY(e.clientY)})
    },[])
    useEffect(()=>{
        console.log("component Updated")
        window.addEventListener('mousemove',(e)=>{setX(e.clientX);setY(e.clientY)})
    },[x,y])
    return(
        <div>
            X-{x} Y-{y}
        </div>
    )
}

export default FuncUseEffect3