import React, { useState } from "react";

function IncreDecreCounter(){
    const initialCount = 0
    const[count,setCount] = useState(initialCount)

    

    return(
        <div>
            Count:{count}<br></br>
            <button onClick={()=>setCount(count+1)}>click to increment</button>
            <button onClick={()=>setCount(count-1)}>Click to decrement</button>
            <button onClick={()=>setCount(initialCount)}>Click to reset</button>
        </div>
    )
}
export default IncreDecreCounter