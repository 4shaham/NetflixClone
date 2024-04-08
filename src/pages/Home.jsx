import React from 'react'
import Hero from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endpoints from "../services/movieServices";

function Home() {
  return (
   <>
    <Hero/>
    <MovieRow  title='upcoming' url={endpoints.upcoming}/>  
    <MovieRow  title='trending' url={endpoints.trending}/>
    <MovieRow  title='comedy' url={endpoints.comedy}/>
    <MovieRow  title='topRated' url={endpoints.topRated}/>
   </>
  )  
}

export default Home
