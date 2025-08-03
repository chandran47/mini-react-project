import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function User(){

const[user,setuser]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setuser(data))},[])
const[searchit, setsearchit]=useState("")
const[filterit, setfilterit]=useState("all")
// searchit!===("")||filterit!===("all")
const filteredusers=user.filter((one)=>{
const searched=one.name.toLowerCase().includes(searchit.toLowerCase())
const filtered=filterit==="all"||one.email===filterit
return searched && filtered
}
)
return(
    <div>

<input className="border border-blue-400 rounded text-red-400" type="text" placeholder="search the name" value={searchit} onChange={(e)=>setsearchit(e.target.value)}/>
<select className="border border-blue-400 rounded text-blue-400" value={filterit} onChange={e=>setfilterit(e.target.value)}>
<option value="all">ALL</option>
{user.map((i)=>(
<option value={i.email}>{i.email}</option>
))}
     </select>

     <ul>
        {filteredusers.length>0?filteredusers.map((n)=>(<li><Link className="underline font-bold text-slate-600" to={`/users/${n.id}`}>{n.name}-{n.email}</Link></li>)):<li>no user found</li>

 } </ul>

</div>
)

}
export default User