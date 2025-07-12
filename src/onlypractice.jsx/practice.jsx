import Dashboard from "./dashboard";
import Welcome from "./welcome";
import Stats from "./stats";
import Notfound from "./notfound";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function Output(){



return(

<BrowserRouter>

<Routes>
<Route path="/" element={<Dashboard/>}>
<Route index element={<Welcome/>}/>
<Route path="/stats"element={<Stats/>}/>
</Route>
<Route path="*" element={<Notfound/>}/>
</Routes>

</BrowserRouter>

)
}
export default Output