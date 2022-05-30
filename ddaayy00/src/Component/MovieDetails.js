import React from 'react'

const MovieDetails = ({ movieData }) => {
    const {
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Plot,
      Language
    } = movieData;
    return (
      <>
        <p>{Plot}</p>
        <p>{Rated}</p>
        <p>{Released}</p>
      </>
    );
  };
  
  export default MovieDetails;
  



// function MovieDetails(props) {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default MovieDetails
