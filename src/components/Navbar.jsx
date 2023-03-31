import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/users/users.slice";
import {AiOutlineShoppingCart} from "react-icons/ai"

function Navbar() {
  const currentUser = useSelector((store) => store.users.currentUser);
  const dispatch = useDispatch();

  const cart=useSelector((store)=>store.cart.cartItems)
  console.log("length", cart.length);

  const handleLogout = (e) => {
    if (e.target.innerText == "LOGOUT") {
      dispatch(logout());
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "teal",
        color: "white",
        fontSize: "16px",
        padding: "10px 0px",
        textDecoration: "none",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
        HOME
      </Link>
      <Link
        onClick={handleLogout}
        style={{ color: "white", textDecoration: "none" }}
        to={"/login"}
      >
        {currentUser.email ? "LOGOUT" : "LOGIN"}
      </Link>
      <Link
        hidden={currentUser.email}
        style={{ color: "white", textDecoration: "none" }}
        to={"/signup"}
      >
        SIGN UP
      </Link>
      <p hidden={!currentUser.name} style={{ fontSize: "16px" }}>
        {currentUser?.name?.toUpperCase()}
      </p>
      <p hidden={!currentUser.name}>CART {cart.lenth}</p>
    </div>
  );
}

export default Navbar;
