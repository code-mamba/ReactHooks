import React,{ useState } from "react";

function CountHooks2(){
    const[name, setName] = useState({firstName: '', LastName:''})
   
    return(
        <form>
        <input type="text" value ={name.firstName} onChange = {e =>setName({...name,firstName: e.target.value})}></input>
        <input type="text" value={name.LastName} onChange = {e=>setName({...name,LastName:e.target.value})}></input>
        <h2>{name.firstName}{name.LastName}</h2>
        
        </form>
    )
}
export default CountHooks2
