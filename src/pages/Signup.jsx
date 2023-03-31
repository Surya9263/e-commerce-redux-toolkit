import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signup } from "../features/users/users.slice";

function Signup() {
  let creds = {
    name: "",
    email: "",
    password: "",
  };
  const [signupCreds, setSignupCreds] = useState(creds);
  const users = useSelector((store) => store.users);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupCreds({ ...signupCreds, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupCreds.name || !signupCreds.email || !signupCreds.password) {
      return alert("All fields are required");
    } else {
      let filtered = users?.users?.filter((e) => e.email == signupCreds.email);
      if (filtered.length > 0) {
        setSignupCreds(creds);
        return alert("User already exists!!");
      } else {
        dispatch(signup(signupCreds));
        setSignupCreds(creds);
        navigate("/");
      }
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "teal",
          width: "25%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Sign up here..</h2>
      </div>

      <form onSubmit={handleSignup} style={{ width: "25%", margin: "auto" }}>
        <input
          value={signupCreds.name}
          onChange={handleChange}
          style={{ padding: "10px 70px", marginTop: "20px" }}
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <input
          value={signupCreds.email}
          onChange={handleChange}
          style={{ padding: "10px 70px", marginTop: "20px" }}
          name="email"
          type={"email"}
          placeholder="Enter your email"
        />
        <br />
        <input
          value={signupCreds.password}
          onChange={handleChange}
          style={{ padding: "10px 70px", marginTop: "20px" }}
          name="password"
          type={"password"}
          placeholder="create password"
        />
        <br />
        <input
          style={{
            padding: "10px 55px",
            marginTop: "20px",
            width: "100%",
            backgroundColor: "teal",
            color: "white",
            fontSize: "15px",
          }}
          type="submit"
          value={"SIGN UP"}
        />
      </form>
    </div>
  );
}

export default Signup;
