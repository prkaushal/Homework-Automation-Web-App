import React from "react";
import TaskCard from "./TaskCard";

function CompleteTask() {
  return (
    <div className="bg-customGrey-500 flex  flex-col h-screen gap-10 px-40 py-10 ">
      <div>
        <h1 className="text-white text-3xl font-extrabold">COMPLETE TASK</h1>
      </div>
      <div className="gap-10 flex flex-col overflow-scroll">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      </div>
    </div>
  );
}

export default CompleteTask;
