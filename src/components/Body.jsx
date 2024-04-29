import React from "react";
import OptionCards from "./OptionCards";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="bg-customGrey-500  h-screen flex justify-center items-center gap-10">    
      <Link to={"/automate-task"}>
      <OptionCards option={"AUTOMATE TASK"} />
      </Link>   
      <Link to={"/complete-task"}>
      <OptionCards option={"COMPLETE TASK"} />
      </Link>
      </div>
    </>
  );
}

export default Body;
