import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Products from "./Products";
import Signup from "./Signup";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<PrivateRoute><Products/></PrivateRoute>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default AllRoutes