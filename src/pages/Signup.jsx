import React ,{useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";






function Signup() {

  const[userDetails,setUserDetails]=useState({name:'',password:''})
  const[error,setError]=useState({errName:'',errPassword:''})

  const{user,signUp}=UserAuth()
  const navigate=useNavigate()

 const onClickSubmit=async(e)=>{
    e.preventDefault();

    if(userDetails.name.trim()=='' && userDetails.password.trim()=='' ){
      return  setError({name:'This field is required' , password:'This field is required'})
    }
    
    if(userDetails.name.trim()==''){
      setError({name:'' , password:''})
      return  setError({name:'This field is required' , password:error.password})
    }

    if(userDetails.password.trim()==''){
      setError({name:'' , password:''}) 
     return  setError({name:error.name,password:'this field is required'})
    }  

     
    try{
      console.log('shamamma',userDetails.name,userDetails.password)  
      await signUp(userDetails.name,userDetails.password)
      navigate("/")

    }catch(err){
      console.log(err)
    }
  }

  
  return (
    <>
      <div className="w-full h-screen">
        <img className="w-full h-[730px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />

        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-20">
            <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-nsans-bold">signup</h1>
                <form onSubmit={onClickSubmit} className="w-full flex flex-col py-4">
                  <input 
                    onChange={(e)=>setUserDetails({name:e.target.value,password:userDetails.password})}
                    value={userDetails.name}
                    className="p-3 my-2   bg-gray-700 rounded "
                    type="email"
                    placeholder="email"
                  ></input>
                  <small className="text-red-500">{error.name}</small>
                  <input
                    onChange={(e)=>setUserDetails({name:userDetails.name,password:e.target.value})}
                    value={userDetails.password}
                    className="p-3 my-2   bg-gray-700 rounded "
                    type="password"
                    placeholder="password"
                  ></input>
                  <small className="text-red-500">{error.password}</small>
                  <button type="submit" className="text-white bg-red-700 rounded p-3 my-5">
                    signup
                  </button>
                  <div className="flex justify-between items-center text-gray-700">
                    <p>
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </p>
                    <p>?need help</p>
                  </div>
                  <p className="my-4">
                    <span className="text-gray-600">
                      Already subscribed to Netflix?
                    </span>
                    <Link to="/login">login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
