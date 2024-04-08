import React from "react";
import {} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";



const App = () => {
  return (
    <div>
     <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
        </AuthContextProvider>  
  
    </div>
  );
};

export default App;
