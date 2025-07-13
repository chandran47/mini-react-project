import { Outlet, Link } from "react-router-dom";

function Nav(){


return(
<div>
<nav>
<Link to="/">Home</Link>|<Link to="/form">form</Link>|<Link to="/users">User</Link>
</nav>
<hr/>
<Outlet/>
</div>
)

}

export default Nav