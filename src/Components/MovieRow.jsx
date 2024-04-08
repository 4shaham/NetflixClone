import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) =>
        setMovies(response.data.results )
      )
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      <h2 className="font-nsans-bold md:text-xl-p4 capitalize">
        {title}
      </h2>
      <div className="relative flex items-center">
        <div id={`starts`} className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smoooth scrollbar-hide ">   
          {movies.map((values)=>(
            <MovieItem key={values.id} movie={values}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieRow;
