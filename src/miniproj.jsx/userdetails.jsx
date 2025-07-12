import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Userdetails(){

const{id}=useParams()
const[oneuser, setoneuser]=useState(null)
useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=>setoneuser(data))

},[id])

 if (!oneuser) return <p>Loading user...</p>;

return(
    <div>
<h3>{oneuser.name}</h3>
<p>email:{oneuser.email}</p>
<p>phone:{oneuser.phone}</p>
</div>
)

}

export default Userdetails