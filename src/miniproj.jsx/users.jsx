import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function User(){

const[user,setuser]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setuser(data))},[])

return(
    <div>
        
        {user.map(n=><p>
             <Link to={`/users/${n.id}`}>{n.name}</Link>
            </p>)}

    </div>
)}

export default User