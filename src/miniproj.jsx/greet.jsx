import { useParams } from "react-router-dom";
function Params(){

  const{name}=useParams()
  const{email}=useParams()
  const{city}=useParams()
  return(
   <div>
     <p>username:{name}</p>
     <p>email:{email}</p>
      <p>city:{city}</p>
</div>
)

}
export default Params

