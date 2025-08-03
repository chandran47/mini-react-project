import Nav from "./miniproj.jsx/navbar.jsx";
import Home from "./miniproj.jsx/home.jsx"
import Form from "./miniproj.jsx/form.jsx"
import User from "./miniproj.jsx/users.jsx"
import Notfound from "./miniproj.jsx/notfound.jsx";
import { Navigate } from "react-router-dom";
import Userdetails from "./miniproj.jsx/userdetails.jsx";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
function Main(){

return(
    
<div className="min-h-screen bg-blue-300 text-white p-2 flex items-center overflow-x-hidden">
<BrowserRouter>
<Routes>
<Route path="/" element={<Nav/>}> 
<Route index element={<Home/>}/>
<Route path="/form" element={<Form/>}/>
<Route path="/users/" element={<User/>}/>
<Route path="/users/:id" element={<Userdetails/>}/>
<Route path="*" element={<Notfound/>}/>
</Route>  
</Routes>
</BrowserRouter>
</div>

)

}


export default Main