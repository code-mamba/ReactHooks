import React,{useState,useEffect} from 'react'
function HookCountInc(){

    const[count, setCount] = useState(0)
    const[name, setName]= useState("")
    useEffect(()=>{
        
        console.log("Updating document values")
        document.title = `You Clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" onChange = {e=>{setName(e.target.value)}}></input>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}
export default HookCountInc