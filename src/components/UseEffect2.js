
import React, { useEffect, useState } from "react";
function Useeffect2(){
    const[name,setName] = useState("")
console.log('render')
useEffect(()=>{
    console.log("name changed")
})
  return(
    <div>
        <button onClick={()=>{setName("Dhanush")}}>Dhanush</button>
        <button onClick={()=>{setName("Madee")}}>Madee</button>
        <button onClick={()=>{setName("Santhosh")}}>Santhosh</button>

        <h1>You selected{name}</h1>
    </div>
  )
}
export default Useeffect2