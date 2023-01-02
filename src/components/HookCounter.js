import React,{useEffect, useState}  from "react";
function HookCounter(){

    const[count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

    return(
    
        <div>
            <p>You Clicked {count}times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default HookCounter