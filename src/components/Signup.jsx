import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

const [name , setName] = useState();
const [password , setPassword] = useState();
const [email , setEmail] = useState();
const [phone , setPhone] = useState();
const navigate = useNavigate();
 

  const handleClick = (e) => {
    if (!email || !password || !name || !phone) {
      alert("all fields must be filled.");
      return; 
    }  else{

    

    axios
      .post("http://localhost:3000/signup", { name, email, password, phone })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));

    }
  };

  return (
    <>
      <div className="bg-customGrey-500 flex flex-col justify-center items-center h-screen gap-10 ">
        <div className="justify-center items-center flex">
          <img src={Logo} alt="Homework app logo" className="w-1/4" />
        </div>
        
        <input type="text"  placeholder="Your Name" onChange={(e) => setName(e.target.value)} className='px-5 rounded-lg text-white outline-none border-white border py-1 bg-transparent w-80'/>
        <input type="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='px-5 rounded-lg text-white outline-none border-white border py-1 bg-transparent w-80'/>
        <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='px-5 rounded-lg text-white outline-none border-white border py-1 bg-transparent w-80'/>
        <input type="number"  placeholder="Phone" onChange={(e) => setPhone(e.target.value)} className='px-5 rounded-lg text-white outline-none border-white border py-1 bg-transparent w-80'/>
        

        <Button1 onClick={handleClick}>Register</Button1>

        <h1 className="text-customGrey-300">
          already have an account.
          <Link to="/login" className="text-blue-300">
            Login
          </Link>
        </h1>
      </div>
    </>
  );
}

export default Signup;
