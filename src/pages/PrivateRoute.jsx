import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"

function PrivateRoute({children}){

    const currentUser=useSelector((store)=>store.users.currentUser)
    // console.log("in",currentUser);
    if(!currentUser.email){
       return <Navigate to={"/login"} />
    }
    return children
}

export default PrivateRoute