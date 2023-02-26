import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const nav=useNavigate()

  async function handleLogin() {
    try {
      const response = await fetch(`https://63f5ae2dab76703b15af7a53.mockapi.io/user?email=${email}&password=${password}`);
      const json = await response.json();
      console.log(json);
      if(json.length === 0){
        alert("Invalid email or password");
      }else if (json[0].email === "admin@gmail.com" && json[0].password === "admin") {
        alert("Admin Sign In Successful");
        localStorage.setItem("User", json[0].name);
        
        nav("/login/admin");
      }
      else {
        alert("Successfully logged in!");
        localStorage.setItem("User", json[0].name);
        nav("/")
       
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  async function handleSignup() {
    const data = { name, email, password };
    try {
      const response = await fetch("https://63f5ae2dab76703b15af7a53.mockapi.io/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      alert("Successfully signed up!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  }

  return (
    <div className="login-signup-container">
        <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>
              Name:
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control" 
              />
            </label>
          </div>
        )}
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" 
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" 
            />
          </label>
        </div>
        <div className="form-group">
<button className="btn btn-primary" type="submit">{isLogin ? "Login" : "Sign Up"}</button>
</div>
<div>
<button className="btn btn-link" type="button" onClick={() => setIsLogin(!isLogin)}>
{isLogin ? "Need to create an account?" : "Already have an account?"}
</button>
</div>
</form>
</div>
);
}

export default LoginSignup;