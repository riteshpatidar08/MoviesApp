import React from 'react';

function Card({ movie }) {
  console.log(movie);
  return (
    <div className="drop-shadow-lg  rounded-md w-96 p-4 mx-4 my-10 grid gap-3 grid-cols-2">
      <div>
        <img className="rounded-md" src={movie.Poster} />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <p className="text-white font-semibold ">Title : {movie.Title}</p>
        <p className="text-white font-semibold ">Year : {movie.Year}</p>
        <p className="text-white font-semibold ">Type : {movie.Type}</p>
        <button className="rounded-md px-6 py-2 bg-indigo-700 text-white font-semibold">
          Details
        </button>
      </div>
    </div>
  );
}

export default Card;
