import React from 'react'
import {  } from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import Profile from './assets/pages/Profile'
import Signup from './assets/pages/Signup'
import Login from './assets/pages/Login'
import Navbar from './assets/Components/Navbar'
const App = () => {
  return (
    <>
    <Navbar/> 
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App

