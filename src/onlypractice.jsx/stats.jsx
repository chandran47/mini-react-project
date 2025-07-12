import { useNavigate } from "react-router-dom";
import Welcome from "./welcome";
function Stats(){
const Towelcome=useNavigate()

const Whenclicked=()=>{
    Towelcome("/")
}
    return(
        <div>
        <p>90% of stats are perfect</p>
        <button onClick={Whenclicked}>to welcome</button>
        </div>
    )
}

export default Stats