// import logo from './logo.svg';
 import React, { useState, useEffect } from "react";
import MovieCard from './Component/MovieCard'
import { getMovieBySearchTerm, getMovieById } from './Component/Utils';
import MovieDetails from './Component/MovieDetails';
import './App.css';

let id = "87f70c35"; //add your id here
let searchTitle = "liar liar";



function App() {
  const [movieData, setMovieData] = useState([]);
  
  // const [searchTerm, setSearchTerm] = useState("batman");
  // const [isLoading, setIsLoading] = useState(false)
  // // const [movies, setMovies] = useState([])
  // const [error, setError] = useState(null)

  // useEffect(()=>{ 
  //   async function fetchMovie() {
  //     a
  //     // let data = await getMovieBySearchTerm(id,movieData)
      
  //       }
  //     )
  



  // const data = [];
  useEffect(() => {
    const getMovie = async () => {
      let data = await getMovieBySearchTerm(id, searchTitle);
      setMovieData(data);
    };
    getMovie();
  });

  useEffect(() => {
    const getMovie = async () => {
      let data = await getMovieBySearchTerm(id, searchTitle);
      setMovieData(data);
    };
    getMovie();
  });


  return (
    <div className="App">
      <MovieCard
        poster={movieData.Poster}
        title={movieData.Title}
        type={movieData.Type}
      />
      <MovieDetails movieData={movieData} />


      {/* <MovieCard />
      <Utils />
      <MovieDetails /> */}
    </div>
  );
}

export default App;
