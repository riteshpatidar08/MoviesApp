import React, { useState } from 'react';

function Navbar({setQuery,results}) {
  console.log(results)
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='sticky top-0 z-10' >
      <header className="h-12  m-4 rounded-md bg-indigo-700 p-2 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">🍿Movies</h1>

        <div>
          <input
            type="text"
            onChange={handleChange}
            className="text-white input w-96 outline-none rounded-md p-1"
            placeholder="Search movies..."
            autoFocus
          />
        </div>

        <div>
          <p className="text-md font-medium text-white">{`Found ${results || 0} movies `}</p>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
