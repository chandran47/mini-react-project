import { Outlet, Link } from "react-router-dom";

function Nav(){


return(
<div >
<nav className= "fixed top-0 text-black p-1 flex gap-6" >
<Link className="text-shadow-sm p-1" to="/">Home</Link>|<Link className="text-shadow-sm p-1" to="/form">form</Link>|<Link className="text-shadow-sm p-1" to="/users">User</Link>
</nav>
<Outlet/>
</div>
)

}

export default Nav