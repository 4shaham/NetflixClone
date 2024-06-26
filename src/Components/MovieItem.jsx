import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  const[like,setLike]=useState('false')
  const { backdrop_path, title, poster_path } = movie;

  return (
    <div className=" relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-lg inline-block overflow-hidden cursor-pointer m-2 ">
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path, "original")}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
          {movie.title}
        </p>

        <p>{like=='true'?(<FaHeart
            onClick={()=>setLike('false')} size={20} 
            className="absolute top-2 left-2 text-great-300"/>):
            ( < FaRegHeart
             onClick={()=>setLike('true')}
             size={20}
             className="absolute top-2 left-2 "/>)}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
