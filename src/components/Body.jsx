import React from "react";
import OptionCards from "./OptionCards";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="bg-customGrey-500  h-screen flex justify-center items-center gap-10">
        <OptionCards option={"AUTOMATE TASK"} />
        <OptionCards option={"COMPLETE TASK"} />
      </div>
    </>
  );
}

export default Body;
