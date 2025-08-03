import { useEffect, useState } from "react";
function Form(){
const[username, getusername]=useState("")
const[age, getage]=useState("")
const valid=username.trim()!==""&&age.trim()!=="" 
const[motive, setmotive]=useState("")
useEffect(()=>{if(username.trim()===""||age.trim()===""){setmotive("")}},[username,age])
const result=()=> {
let total=age.toString().split("").reduce((sum,digit)=>sum+Number(digit),0)

while(total>9){
    total=total.toString().split("").reduce((sum,digit)=>sum+Number(digit),0)
}

switch(total){
    case 1:
    setmotive("you are a Leader who is Independent, ambitious, strong-willed, goal-oriented.")
    break;
    case 2:
    setmotive("you are a Peacemaker, Cooperative, sensitive, diplomatic, supportive.")
    break;
    case 3:
    setmotive("you are a Creative Communicator, Expressive, optimistic, artistic, joyful.")
    break;
    case 4:
    setmotive("you are a Builder, Practical, disciplined, reliable, hardworking.")
    break;
    case 5:
    setmotive("you are an Adventurer, Curious, freedom-loving, energetic, adaptable.")
    break;
    case 6:
    setmotive("you are a Caretaker, Responsible, nurturing, family-oriented, compassionate.")
    break;
    case 7:
    setmotive("you are a Thinker, Analytical, introspective, spiritual, deep.")
    break;
    case 8:
    setmotive("you are Powerful, Ambitious, business-minded, authoritative, goal-driven.")
    break;
    case 9:
    setmotive("you are a Humanitarian, Generous, wise, idealistic, selfless.")
    break;
}
}
const[numb, getnumb]=useState("")

const err=()=>isNaN(numb)?"please enter number":""
return(
    <div>
        <h1 className="font-bold text-shadow text-slate-600 m-1 text-xl" >"want to know what is your age mean as per numerology? fill in the form below"</h1>
        <input className="border border-grey-500 rounded text-red-700" type="text" placeholder="enter username" value={username} onChange={e=>getusername(e.target.value)} />
        <input className="border border-grey-500 rounded text-red-700" type="text" placeholder="enter your age" value={age} onChange={e=>!isNaN(e.target.value)?(getage(e.target.value), getnumb("")):getnumb(e.target.value)} />
         <button className="bg-red-300 text-yellow-900 p-1 font-bold rounded shadow" disabled={!valid} onClick={result}>submit</button>
         <p>{err()}</p>
         <p className="text-stroke font-bold text-slate-600 m-1" >{motive}</p>
         
    </div>
)
}

export default Form