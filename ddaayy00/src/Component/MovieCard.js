import React, {  useEffect,  useState} from "react";
import {  getMovieById,  getMovieBySearchTerm} from "./Utils";
import styled from 'styled-components';

const MovieCard = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(async () => {
    const file = await fetch(
      "http://www.omdbapi.com/?t=batman&apikey=87f70c35");
    const data = await file.json();
    setMovies(data.Search);
  },[];
   console.log(Movies);
  return (
    <div> {
      Movies.map((movie) => {
        return (
          <div key={movie.imdbID} >
          <img src={movie.Poster}alt="" />
            <h3> {movie.Title} </h3>
          </div>
            );
          })
        }
    </div>
            );
};

const button = styled.button`
dispaly: flex;
`


  export default MovieCard;

    // const MovieCard = ({ poster, title, type }) => {
    //     if (title) {
    //       return (
    //         <div id="movieCard">
    //           <img src={poster} alt="No Poster" />
    //           <div id="movieDescription">
    //             <p>{title}</p>
    //             <p id="type">{type}</p>
    //           </div>
    //         </div>
    //       );
    //     } else {
    //       return <></>;
    //     }
    //   };

    //   export default MovieCard;

    //  const MovieCard = props => {
    //     return (
    //               <div>
    //             <p> {props.title}</p>
    //             <p> {props.type}</p>
    //             <p> {props.posterUrl}</p>
    //               </div>)
    //    }

    // export default MovieCard;