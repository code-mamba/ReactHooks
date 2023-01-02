import React, { useState } from "react";
import useInput from "./inputFeature";
function UserInput(){
  

    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]= useInput('')
    const submitHandler = e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return(
        <form onSubmit = {submitHandler}>
            <div>
            <label>FirstName</label>
            <input 
            {...bindFirstName}
            type= "text"></input>
            </div>
            <div>
            <label>LastName</label>
            <input 
            {...bindLastName}
            type= "text"></input>
            </div>
            <button type="submit">submit</button>
        </form>
       
    )
}
export default UserInput