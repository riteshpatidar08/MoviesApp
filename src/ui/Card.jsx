import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

function Card({ movie }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const [singleMovieDetail, setSingleMovieDetail] = React.useState([]);
  const handleOpen = () => {
    setOpen(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=23d3974b&i=${movie.imdbID}`)
      .then((res) => setSingleMovieDetail(res.data));
  };
  console.log(singleMovieDetail);

  const handleClose = () => setOpen(false);

  return (
    <div className="drop-shadow-lg  rounded-md w-96 p-4 mx-4 my-10 grid gap-3 grid-cols-2">
      <div>
        <img className="rounded-md" src={movie.Poster} />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <p className="text-white font-semibold ">Title : {movie.Title}</p>
        <p className="text-white font-semibold ">Year : {movie.Year}</p>
        <p className="text-white font-semibold ">Type : {movie.Type}</p>
        <button
          onClick={handleOpen}
          className="rounded-md px-6 py-2 bg-indigo-700 text-white font-semibold"
        >
          Details
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {singleMovieDetail.Title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Card;
