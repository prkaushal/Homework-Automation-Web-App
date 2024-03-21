import React from "react";
import Logo from "../assets/Logo.svg";
import Input from "./Input";
import Button1 from "./Button1";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="bg-customGrey-500 flex flex-col justify-center items-center h-screen gap-10">
        <div className="justify-center items-center flex">
          <img src={Logo} alt="Homework app logo" className="w-1/4" />
        </div>
        <Input type="text" placeholder="email" />
        <Input type="Password" placeholder="Password" />
        <Link to={"/home"}>
          <Button1>Login</Button1>
        </Link>

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
