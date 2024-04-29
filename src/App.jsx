import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AutomateTask from "./components/AutomateTask";
import Layout from "./Layout";
import Body from "./components/Body";
import CompleteTask from "./components/CompleteTask";
import AuthLayout from "./AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
