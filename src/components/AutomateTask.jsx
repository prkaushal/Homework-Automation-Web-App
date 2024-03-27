import React from "react";
import Cross from "../assets/cross.svg";
import Button1 from "./Button1";
import Illustration from '../assets/illustration.svg'

function AutomateTask() {
  return (
    <div className="bg-customGrey-500 px-48 py-20 h-screen ">
      <div className="border px-20 py-10 gap-5 flex flex-col bg-customGrey-800 rounded-xl">
        <div className="bg-customGrey-800 flex justify-between">
          <h1 className="text-white text-2xl font-bold"> AUTOMATE TASK</h1>
          <img src={Cross} alt="cross" className="w-5" />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Title"
              className="bg-transparent border rounded-lg px-3 w-80 py-2 outline-none text-white "
            />
            <input
              type="text"
              placeholder="Description"
              className="bg-transparent border rounded-lg px-3 w-80 py-2 outline-none h-48 outline-none text-white"
            />
            <div className="flex justify-between ">
              <input type="number" placeholder="Amount" className="bg-transparent border rounded-lg px-1 w-40 text-white outline-none"/>
              <input type="date" placeholder="Completion Date" className="bg-transparent border rounded-lg px-1 text-white outline-none" />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <img src={Illustration} alt="" className="w-56"/>
            <p className="text-white font-thin align-middle px-20">
              Fill the details of the task you want to be done. make sure 
              all the fields are filled properly
            </p>
            <Button1 children={"Publish Task"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomateTask;
