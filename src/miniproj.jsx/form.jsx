import { useState } from "react";
function Form(){
const[username, getusername]=useState("")
const[password, getpassword]=useState("")
return(
    <div>
        <input type="text" placeholder="enter username" value={username} onChange={e=>getusername(e.target.value)} />
        <input type="text" placeholder="enter password" value={password} onChange={e=>getpassword(e.target.value)} />
         <button type="add">add user</button>
    </div>
)
}

export default Form