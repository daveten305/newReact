
const fetchJSON = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return response;
};

export const getMovieBySearchTerm = (key, title) => {
  let url = `https://www.omdbapi.com/?apikey=${key}&t=${title}`;
  return fetchJSON(url);
};

export const getMovieById = (key, id) => {
  let url = `https://www.omdbapi.com/?apikey=${key}&i=${id}`;
  return fetchJSON(url);
};



//  import React from "react";

//  let apiKey = "",
//  searchTerm = "spider man ";
// let getMoviesBySearchTerm = async (apiKey, searchTerm) => {
//  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
//  let response = await fetch(url);
//  let data = await response.json();
//  console.log(data);
// };

// getMoviesBySearchTerm(apiKey, searchTerm);
// let Id = "tt3896198";
// let getMoviesByDetailsById = async (apiKey, id) => {
//  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
//  let response = await fetch(url);
//  let data = await response.json();
//  console.log(data);
// };
// getMoviesByDetailsById(apiKey, Id)

// export default Utils;









// let app = document.getElementById("app");
// let form1 = document.querySelector("#form1");
// const url = new URL("https://www.omdbapi.com");

////-------------------------------------------Using promises and .then

// let getMoviesBySearchTerm = (myKey, title) => {
//   let url = `https://www.omdbapi.com/?apikey=${myKey}&t=${title}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       app.innerHTML = data.Title;
//     })
//     .catch((er) => console.log(er, url));
// };

//-----------------------------------------------Using Async and Await

// let getMoviesBySearchTerm = async (myKey, title) => {
//   url.searchParams.append("apikey", myKey);
//   url.searchParams.append("t", title);
//   let response = await fetch(url);
//   let data = await response.json();
//   let string = JSON.stringify(data);
//   app.innerHTML = string;
//   // return data;
// };

// let getMovieDetailsById = async (myKey, id) => {
//   url.searchParams.append("apikey", myKey);
//   url.searchParams.append("i", id);
//   let response = await fetch(url);
//   let data = await response.json();
//   let string = JSON.stringify(data);
//   app.innerHTML = string;
//   // return data;
// };

// function load(event) {
//   event.preventDefault();
//   let key = event.target[0].value;
//   let title = event.target[1].value;
//   let id = event.target[2].value;
//   id ? getMovieDetailsById(key, id) : getMoviesBySearchTerm(key, title);
// }

// form1.addEventListener("submit", (event) => {
//   load(event);
// });








