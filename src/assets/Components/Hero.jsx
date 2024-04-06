import React, { useEffect,useState } from 'react'
import axios from 'axios'
import endpoints from '../../services/movieServices'


function Hero() {

  const[movies,setMovies]=useState({})

  useEffect(()=>{
    axios.get(`${endpoints.popular}`)
    .then((response)=> {
       const movies=response.data.results[Math.round(Math.random())]
        setMovies(movies)
        console.log(movies)
    }
    )
    .catch((err)=>console.log(err))

  },[])


  return (
    <div>
      her0
     
      <h2>dhd</h2>
      <h1>{movies.original_language}</h1>
      <h1>{movies.original_title}</h1>
    </div>
  )
}

export default Hero
