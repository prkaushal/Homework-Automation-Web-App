import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App;
