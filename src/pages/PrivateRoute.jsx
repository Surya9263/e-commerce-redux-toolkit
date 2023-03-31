import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){

    const currentUser=useSelector((store)=>store.users.currentUser)
    if(!currentUser.email){
       return <Navigate to={"/login"} />
    }
    return children
}

export default PrivateRoute