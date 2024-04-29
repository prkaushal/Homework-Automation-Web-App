import React from "react";

function TaskCard() {
  return (
    <div className="border rounded-xl px-10 py-5 gap-5 flex flex-col">
      <div className="flex justify-between items-center ">
        <h2 className="text-white font-semibold text-2xl">
          Writing 5 pages of assignment{" "}
        </h2>
        <h1 className="text-white font-semibold text-4xl">Rs. 250</h1>
      </div>

      <div>
        <h4 className="text-white font-thin">
          you have to write my 20 pages of my assignment of my lab work. i will
          provide all the info what you have to write and what not. meet me at
          the cafeteria and we can discuss all the things related to it
        </h4>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-gray-500 text-xs">Time Left : 5:43:23</h6>
        </div>
        <div className="flex gap-10">
          <button className="border rounded-full px-10 text-white py-2">APPLY</button>
          <button className="border rounded-full px-10 text-white py-2">CHAT</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
