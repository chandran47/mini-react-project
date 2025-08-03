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
<h3 className="font-bold text-blue-600" >{oneuser.name}</h3>
<p className="font-bold text-blue-600">email:{oneuser.email}</p>
<p className="font-bold text-blue-600">phone:{oneuser.phone}</p>
<p className="font-bold text-blue-600">Address:{oneuser.address?.street}</p>
</div>
)

}

export default Userdetails