import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
 

  const{user,logOut}=UserAuth()
  const navigate=useNavigate()

const handleLogOutButton=async()=>{
  
 try{

   await logOut()
   navigate('/')

 }catch(err){

  console.log(err)

 } 
  

}


  return (
    <div className="absolute w-full p-4 flex item-center justify-between z-50">
      <Link to={"/"}>
        <h1 className="upeerCase text-red-500 h-10 text-3xl">Netflix</h1>
      </Link>  
      
      {user?.email ?(
      <div>
        <Link to={"/profile"}>
            <button className="capitalize pr-4 ">Profile</button>
        </Link>
        <Link>
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer" onClick={handleLogOutButton}>Logout</button>
        </Link>
        </div>
        ):(
          <div>
        <Link to={"/login"}>
            <button className="capitalize pr-4 ">Login</button>
        </Link>
        <Link to={"/signup"}>
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">Signup</button>
        </Link>
        </div>
       )} 
      
    </div>
  );
}

export default Navbar;
