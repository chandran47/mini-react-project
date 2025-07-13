import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form(){
const[username, getusername]=useState("")
const[password, getpassword]=useState("")
const Navigate=useNavigate()
const clickit=()=>{
Navigate("/")}
return(
    <div>
        <input type="text" placeholder="enter username" value={username} onChange={e=>getusername(e.target.value)} />
        <input type="text" placeholder="enter password" value={password} onChange={e=>getpassword(e.target.value)} />
         <button onClick={clickit}>To home</button>
    </div>
)
}

export default Form