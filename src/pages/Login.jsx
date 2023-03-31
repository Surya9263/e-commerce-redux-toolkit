import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/users/users.slice";

function Login() {
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let creds = {
    name: "",
    email: "",
    password: "",
  };

  const [loginCreds, setLoginCreds] = useState(creds);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginCreds.email || !loginCreds.password) {
      return alert("All fields are required");
    } else {
      let filtered = users?.users?.filter((e) => e.email == loginCreds.email);
      if (filtered.length == 0) {
        setLoginCreds(creds);
        return alert("User does not exists!!");
      } else {
        if (
          filtered[0]?.email == loginCreds.email &&
          filtered[0]?.password == loginCreds.password
        ) {
          loginCreds.name = filtered[0]?.name;
          dispatch(login(loginCreds));
          setLoginCreds(creds);
          navigate("/");
        } else {
          alert("Incorrect email or password !!");
        }
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
        <h2>Login here..</h2>
      </div>

      <form onSubmit={handleLogin} style={{ width: "25%", margin: "auto" }}>
        <input
          value={loginCreds.email}
          onChange={handleChange}
          style={{ padding: "10px 70px", marginTop: "20px" }}
          name="email"
          type={"email"}
          placeholder="Enter your email"
        />
        <br />
        <input
          value={loginCreds.password}
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
          value={"LOGIN"}
        />
      </form>
    </div>
  );
}

export default Login;
