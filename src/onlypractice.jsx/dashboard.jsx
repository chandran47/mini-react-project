import { Outlet, Link } from "react-router-dom";

function Dashboard(){


return(
    <div>
    <nav>
<Link to="/">Welcome</Link>|<Link to="/stats">stats</Link>
</nav>
<hr/>
<Outlet/>
</div>
)

}

export default Dashboard