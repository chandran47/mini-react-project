import Nav from "./miniproj.jsx/navbar";
import Home from "./miniproj.jsx/home"
import Form from "./miniproj.jsx/form"
import User from "./miniproj.jsx/users"
import Notfound from "./miniproj.jsx/notfound";
import Userdetails from "./miniproj.jsx/userdetails";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
function Main(){

return(
    

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
)

}


export default Main