import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import Card from '../ui/Card';
import { Pagination } from '@mui/material';

function Movies({ query, setResults }) {
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const fetchData = useCallback(
    debounce(async (query, currentPage) => {
      console.log(currentPage);
      setLoading(true);
      try {
        const data = await axios.get(
          `http://www.omdbapi.com/?apikey=23d3974b&s=${query}&page=${currentPage}`
        );
        setMovies(data.data.Search);
        setTotalPages(Math.ceil(data.data.totalResults / 10));
        setResults(data.data.totalResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchData(query, currentPage);
  }, [query, currentPage]);

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
            <div className="h-[80vh] flex justify-center items-center">
              <p className="font-semibold text-2xl text-white">
                No Movies Available
              </p>
            </div>
          )}
        </div>
      )}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="solid"
        shape="rounded"
       
      />
    </div>
  );
}

export default Movies;
