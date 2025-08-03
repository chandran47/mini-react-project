import { Typewriter } from "react-simple-typewriter"
import { useNavigate } from "react-router-dom";

function Home(){
const navigate=useNavigate()
  return(
<div>
<h1 className="text-blue-600 text-3xl font-bold"><Typewriter words={["welcome amigo! Appreciate your time."]} loop={false} cursor cursorStyle="|" typeSpeed={60} /></h1>
<p className="text-xl text-slate-600 text-stroke font-bold m-1" >Glad to have you here. Start by exploring the user list or filling the form</p>
<p className="text-xl text-slate-600 text-stroke font-bold m-1"> This is a simple React app where you can fill a form and get your numerology, view users, and navigate across routes with ease.</p>
<button className=" rounded text-stroke font-bold bg-blue-700 p-1 m-1" onClick={()=>navigate("/form")}>To form</button>| 
<button className=" rounded text-stroke font-bold bg-blue-700 p-1 m-1" onClick={()=>navigate("/users")}>To users</button>
</div>
)

}


export default Home