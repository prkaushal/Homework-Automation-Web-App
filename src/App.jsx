import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/home" Component={Home}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
