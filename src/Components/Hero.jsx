import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints,{createImageUrl} from "../services/movieServices";

const Hero=()=> {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(`${endpoints.popular}`)
      .then((response) => {
        const movies =
          response.data.results[
            Math.round(Math.random() * response.data.results.length)
          ];
        setMovies(movies);
        console.log(movies);
      })
      .catch((err) => console.log(err));
  }, []);

  const { title, backdrop_path, release_date, overview } = movies;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black">
          <img
            className="w-full h-full object-cover object-top"
            src={createImageUrl(backdrop_path,'original')}
            alt={title}
          />
          <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
            <h1 className="text-3xl md:text-6xl">{title}</h1>
            <div className="mt-8 mb-4">
              <button className="capitalize border  bg-gray-300 py-2 px-5 text-black">
                Play
              </button>
              <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
                Watch later
              </button>
            </div>
            <p className="text-gray-400 text-sm">{release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
