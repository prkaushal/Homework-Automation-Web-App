import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Input from "./Input";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = ()=> {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (email==='' || password==='') {
      alert("Both email and password fields must be filled.");
      return;
    }

    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-customGrey-500 flex flex-col justify-center items-center h-screen gap-10">
        <div className="justify-center items-center flex">
          <img src={Logo} alt="Homework app logo" className="w-1/4" />
        </div>
        <Input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button1 onClick={handleClick}>Login</Button1>

        <div className=" flex flex-col gap-2">
          <p className="text-sm text-customGrey-300">
            Do not have an account ?
          </p>
          <Link to={"/signup"}>
            <Button1>Create Account</Button1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
