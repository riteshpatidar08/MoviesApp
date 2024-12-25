import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import Card from '../ui/Card';

function Movies({ query, setResults }) {
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(movies);

  const fetchData = useCallback(
    debounce(async (query) => {
      setLoading(true);
      try {
        const data = await axios.get(
          `http://www.omdbapi.com/?apikey=23d3974b&s=${query}`
        );
        setMovies(data.data.Search);
        setResults(data.data.totalResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div>
      {loading ? (
        <div className="max-h-[70vh] flex items-center justify-center">
          <CircularProgress sx={{ color: 'white' }} />{' '}
        </div>
      ) : (
        <div>
          {movies?.length > 0 ? (
            <div className="grid grid-cols-3">
              {movies.map((movie) => (
                <Card movie={movie} />
              ))}
            </div>
          ) : (
            <div className='h-[80vh] flex justify-center items-center'>
               <p className='font-semibold text-2xl text-white'>No Movies Available</p>
            </div>
           
          )}
        </div>
      )}
    </div>
  );
}

export default Movies;
