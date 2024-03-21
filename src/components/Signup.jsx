import React from 'react'
import Logo from "../assets/Logo.svg";
import Input from "./Input";
import Button1 from "./Button1";


function Signup() {
  return (
    <>
    <div className="bg-customGrey-500 flex flex-col justify-center items-center h-screen gap-10">
        <div  className="justify-center items-center flex">
          <img src={Logo} alt="Homework app logo" className="w-1/4" />
        </div>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Email" />
        <Input type="Password" placeholder="Password" />
        <Input type="number" placeholder="Phone number" />
        
        <Button1 >Create Account</Button1>
        

        
      </div>
    </>
  )
}

export default Signup