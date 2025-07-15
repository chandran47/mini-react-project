import { useState, useEffect } from "react";
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

<input type="text" placeholder="search the name" value={searchit} onChange={(e)=>setsearchit(e.target.value)}/>
<select value={filterit} onChange={e=>setfilterit(e.target.value)}>
<option value="all">ALL</option>
{user.map((i)=>(
<option value={i.email}>{i.email}</option>
))}
     </select>

     <ul>
        {filteredusers.length>0?filteredusers.map((n)=>(<li><strong>{n.name}</strong> - {n.email}</li>)):<li>no user found</li>

 } </ul>

</div>
)

}
export default User