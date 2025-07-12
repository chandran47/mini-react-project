import Nav from "./miniproj.jsx/navbar";
import Home from "./miniproj.jsx/details"
import Form from "./miniproj.jsx/form"
import User from "./miniproj.jsx/users"
import Notfound from "./miniproj.jsx/notfound";
import Userdetails from "./miniproj.jsx/userdetails";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
function Main(){

return(
    

<BrowserRouter>
<Nav/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/form" element={<Form/>}/>
<Route path="/users/" element={<User/>}/>
<Route path="/users/:id" element={<Userdetails/>}/>
<Route path="*" element={<Notfound/>}/>
</Routes>

</BrowserRouter>
)

}


export default Main